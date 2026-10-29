create table if not exists public.birthdays (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references auth.users (id) on delete cascade,
  display_name text not null check (char_length(trim(display_name)) between 1 and 60),
  birthday date not null check (birthday <= current_date),
  profile_url text check (profile_url is null or profile_url ~ '^https?://'),
  visibility text not null default 'private' check (visibility in ('private', 'public')),
  created_at timestamptz not null default now()
);

create index if not exists birthdays_owner_id_idx on public.birthdays (owner_id);
create index if not exists birthdays_public_date_idx on public.birthdays (birthday)
  where visibility = 'public';

create table if not exists public.birthday_private_details (
  birthday_id uuid primary key references public.birthdays (id) on delete cascade,
  owner_id uuid not null references auth.users (id) on delete cascade,
  relation text not null
);

alter table public.birthdays enable row level security;

revoke all on public.birthdays from anon, authenticated;
grant select (id, display_name, birthday, profile_url, visibility)
  on public.birthdays to anon;
grant select (id, owner_id, display_name, birthday, profile_url, visibility)
  on public.birthdays to authenticated;
grant delete on public.birthdays to authenticated;

create policy "owners can read their birthdays"
  on public.birthdays for select to authenticated
  using (owner_id = (select auth.uid()));

create policy "public birthdays are readable"
  on public.birthdays for select to anon, authenticated
  using (visibility = 'public');

create policy "owners can delete birthdays"
  on public.birthdays for delete to authenticated
  using (owner_id = (select auth.uid()));

-- The community view intentionally excludes the owner's relationship field.
create or replace view public.community_birthdays
  with (security_invoker = true)
as
  select id, display_name, birthday, profile_url, visibility
  from public.birthdays
  where visibility = 'public';

grant select on public.community_birthdays to anon, authenticated;

alter table public.birthday_private_details enable row level security;
revoke all on public.birthday_private_details from anon, authenticated;
grant select, delete on public.birthday_private_details to authenticated;

create policy "owners can read private birthday details"
  on public.birthday_private_details for select to authenticated
  using (owner_id = (select auth.uid()));

create policy "owners can delete private birthday details"
  on public.birthday_private_details for delete to authenticated
  using (owner_id = (select auth.uid()));

create or replace function public.enforce_birthday_limit()
returns trigger
language plpgsql
security definer
set search_path = public, auth
as $$
begin
  perform id from auth.users where id = new.owner_id for update;
  if (
    select count(*) from public.birthdays
    where owner_id = new.owner_id and id is distinct from new.id
  ) >= 5 then
    raise exception 'You can save up to 5 birthdays.' using errcode = '23514';
  end if;
  return new;
end;
$$;

create trigger enforce_birthday_limit_before_write
  before insert or update of owner_id on public.birthdays
  for each row execute function public.enforce_birthday_limit();

create or replace function public.create_birthday(
  p_display_name text,
  p_birthday date,
  p_profile_url text,
  p_relation text,
  p_visibility text
)
returns uuid
language plpgsql
security definer
set search_path = public, auth
as $$
declare
  new_birthday_id uuid;
begin
  if auth.uid() is null then
    raise exception 'Sign in is required to save a birthday.' using errcode = '42501';
  end if;
  if char_length(trim(p_display_name)) not between 1 and 60 then
    raise exception 'Display name must be between 1 and 60 characters.' using errcode = '22023';
  end if;
  if char_length(trim(p_relation)) not between 1 and 60 then
    raise exception 'Choose a relationship for this birthday.' using errcode = '22023';
  end if;
  if p_visibility not in ('private', 'public') then
    raise exception 'Visibility must be private or public.' using errcode = '22023';
  end if;

  insert into public.birthdays (owner_id, display_name, birthday, profile_url, visibility)
  values (auth.uid(), trim(p_display_name), p_birthday, p_profile_url, p_visibility)
  returning id into new_birthday_id;

  insert into public.birthday_private_details (birthday_id, owner_id, relation)
  values (new_birthday_id, auth.uid(), trim(p_relation));

  return new_birthday_id;
end;
$$;

revoke all on function public.create_birthday(text, date, text, text, text) from public, anon;
grant execute on function public.create_birthday(text, date, text, text, text) to authenticated;
