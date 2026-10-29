import { create } from 'zustand';
import dayjs from 'dayjs';
import { UserBirthday } from '../types';
import { supabase } from '../services/supabaseClient';

export type BirthdayVisibility = 'private' | 'public';

export interface SavedBirthday extends Omit<UserBirthday, 'relation'> {
  id: string;
  ownerId: string | null;
  visibility: BirthdayVisibility;
  relation?: UserBirthday['relation'];
}

export interface NewBirthday extends Omit<SavedBirthday, 'id' | 'ownerId'> {
  relation: UserBirthday['relation'];
}

interface BirthdayState {
  birthdays: SavedBirthday[];
  loading: boolean;
  error: string | null;
  loadBirthdays: (userId: string | null) => Promise<void>;
  addBirthday: (birthday: NewBirthday, ownerId: string) => Promise<string | null>;
  removeBirthday: (id: string) => Promise<string | null>;
}

export const MAX_SAVED_BIRTHDAYS = 5;

interface BirthdayRow {
  id: string;
  owner_id?: string;
  display_name: string;
  birthday: string;
  profile_url: string | null;
  visibility: BirthdayVisibility;
}

function fromRow(row: BirthdayRow, relation?: UserBirthday['relation']): SavedBirthday {
  return {
    id: row.id,
    ownerId: row.owner_id ?? null,
    name: row.display_name,
    birthday: dayjs(row.birthday).toDate(),
    link: row.profile_url ?? undefined,
    relation,
    visibility: row.visibility,
  };
}

export const useBirthdayStore = create<BirthdayState>(set => ({
  birthdays: [],
  loading: false,
  error: null,
  loadBirthdays: async userId => {
    if (!supabase) {
      set({ birthdays: [], loading: false, error: 'Connect a Supabase project to load shared birthdays.' });
      return;
    }
    set({ loading: true, error: null });
    if (userId) {
      const [owned, community] = await Promise.all([
        supabase
          .from('birthdays')
          .select('id, owner_id, display_name, birthday, profile_url, visibility')
          .eq('owner_id', userId),
        supabase
          .from('community_birthdays')
          .select('id, display_name, birthday, profile_url, visibility'),
      ]);
      const error = owned.error ?? community.error;
      if (error) {
        set({ loading: false, error: error.message });
        return;
      }
      const ownedRows = (owned.data ?? []) as BirthdayRow[];
      const privateDetails = ownedRows.length
        ? await supabase
            .from('birthday_private_details')
            .select('birthday_id, relation')
            .in('birthday_id', ownedRows.map(row => row.id))
        : { data: [], error: null };
      if (privateDetails.error) {
        set({ loading: false, error: privateDetails.error.message });
        return;
      }
      const relationById = new Map(
        (privateDetails.data ?? []).map(item => [item.birthday_id, item.relation as UserBirthday['relation']])
      );
      const ownedIds = new Set(ownedRows.map(row => row.id));
      const birthdays = [
        ...ownedRows.map(row => fromRow(row, relationById.get(row.id))),
        ...((community.data ?? []) as BirthdayRow[])
          .filter(row => !ownedIds.has(row.id))
          .map(row => fromRow(row)),
      ].sort((a, b) => a.birthday.getTime() - b.birthday.getTime());
      set({ birthdays, loading: false, error: null });
      return;
    }

    const { data, error } = await supabase
      .from('community_birthdays')
      .select('id, display_name, birthday, profile_url, visibility')
      .order('birthday');
    if (error) {
      set({ loading: false, error: error.message });
      return;
    }
    set({ birthdays: ((data ?? []) as BirthdayRow[]).map(row => fromRow(row)), loading: false, error: null });
  },
  addBirthday: async (birthday, ownerId) => {
    if (!supabase) return 'Connect a Supabase project before adding a birthday.';
    const ownedCount = useBirthdayStore.getState().birthdays.filter(item => item.ownerId === ownerId).length;
    if (ownedCount >= MAX_SAVED_BIRTHDAYS) return `You can save up to ${MAX_SAVED_BIRTHDAYS} birthdays.`;

    const { error } = await supabase.rpc('create_birthday', {
      p_display_name: birthday.name,
      p_birthday: dayjs(birthday.birthday).format('YYYY-MM-DD'),
      p_profile_url: birthday.link ?? null,
      p_relation: birthday.relation,
      p_visibility: birthday.visibility,
    });
    return error?.message ?? null;
  },
  removeBirthday: async id => {
    if (!supabase) return 'Connect a Supabase project before removing a birthday.';
    const { error } = await supabase.from('birthdays').delete().eq('id', id);
    if (error) {
      set({ error: error.message });
      return error.message;
    }
    set(state => ({ birthdays: state.birthdays.filter(birthday => birthday.id !== id), error: null }));
    return null;
  },
}));
