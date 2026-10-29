// Purpose: Lists and removes birthdays owned by the signed-in user.
import { useState } from 'react';
import { LockKey, LockKeyOpen, Trash } from '@phosphor-icons/react';
import dayjs from 'dayjs';
import { useAuthStore, useBirthdayStore } from '../../contexts';

export default function SavedBirthdaysList(): JSX.Element | null {
  const userId = useAuthStore(state => state.session?.user.id ?? null);
  const birthdays = useBirthdayStore(state => state.birthdays);
  const loading = useBirthdayStore(state => state.loading);
  const error = useBirthdayStore(state => state.error);
  const removeBirthday = useBirthdayStore(state => state.removeBirthday);
  const [removingId, setRemovingId] = useState<string | null>(null);

  if (!userId) return null;

  const savedBirthdays = userId
    ? birthdays
        .filter(birthday => birthday.ownerId === userId)
        .sort((a, b) => {
          const aDate = a.birthday.getMonth() * 100 + a.birthday.getDate();
          const bDate = b.birthday.getMonth() * 100 + b.birthday.getDate();
          return aDate - bDate;
        })
    : [];

  async function handleRemove(id: string): Promise<void> {
    setRemovingId(id);
    await removeBirthday(id);
    setRemovingId(null);
  }

  return (
    <section aria-labelledby="saved-birthdays-title" className="mt-4 w-full border-t border-primary-200 pt-3">
      <h3 id="saved-birthdays-title" className="text-primary-800 mb-2 text-sm font-semibold">
        Your saved birthdays
      </h3>

      {loading ? (
        <p className="text-primary-500 text-[11px]">Loading your birthdays…</p>
      ) : error ? (
        <p role="status" className="text-primary-500 text-[11px] leading-snug">
          {error}
        </p>
      ) : savedBirthdays.length === 0 ? (
        <p className="text-primary-500 text-[11px]">No birthdays saved yet.</p>
      ) : (
        <ul className="flex flex-col gap-1.5">
          {savedBirthdays.map(birthday => {
            const isPublic = birthday.visibility === 'public';
            const VisibilityIcon = isPublic ? LockKeyOpen : LockKey;

            return (
              <li
                key={birthday.id}
                className="bg-primary-75 border-primary-200 flex min-w-0 items-center justify-between gap-2 rounded-sm border px-2 py-1.5"
              >
                <div className="min-w-0">
                  <p className="text-primary-800 truncate text-xs font-semibold">{birthday.name}</p>
                  <p className="text-primary-500 flex items-center gap-1 text-[10px] leading-tight">
                    <span>{dayjs(birthday.birthday).format('MMMM D')}</span>
                    <span aria-hidden="true">·</span>
                    <span>{birthday.relation ?? 'Birthday'}</span>
                    <span aria-hidden="true">·</span>
                    <VisibilityIcon size={11} weight="bold" aria-hidden="true" />
                    <span>{isPublic ? 'Public' : 'Private'}</span>
                  </p>
                </div>
                <button
                  type="button"
                  aria-label={`Remove ${birthday.name}'s birthday`}
                  title="Remove birthday"
                  disabled={removingId === birthday.id}
                  onClick={() => void handleRemove(birthday.id)}
                  className="text-primary-500 hover:bg-primary-150 hover:text-primary-800 focus-visible:outline-primary-400 shrink-0 rounded-sm p-1 transition-colors focus-visible:outline-2 focus-visible:outline-offset-1 disabled:cursor-wait disabled:opacity-50"
                >
                  <Trash size={15} weight="duotone" aria-hidden="true" />
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
