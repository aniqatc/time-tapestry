// Purpose: Renders one saved or notable birthday row.
import React from 'react';
import { FamousBirthday } from '../../../types';
import { SavedBirthday } from '../../../contexts';
import { useDateStore } from '../../../contexts';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Trash } from '@phosphor-icons/react';
dayjs.extend(relativeTime);

interface BirthdayListItemProps {
  index: number;
  user: FamousBirthday | SavedBirthday;
  type: 'user' | 'famous' | 'community';
  displayName?: string;
  children: React.ReactNode;
  onRemove?: () => void;
}

export default function BirthdayListItem({ ...props }: BirthdayListItemProps): JSX.Element | null {
  const selectedDate = useDateStore((state: { selectedDate: Date }) => state.selectedDate);
  const { user, type, displayName, index, children, onRemove } = props;

  if (index >= 5) return null;
  const isFamous = type === 'famous';
  const El = user.link ? 'a' : 'span';

  return (
    <li
      className={`${isFamous ? 'mb-2 grid grid-cols-[max-content_minmax(1rem,1fr)_max-content] items-baseline gap-2' : 'mb-0.5 flex items-center justify-between gap-2'} ${type === 'user' && 'lowercase'}`}
    >
      <El
        href={user.link}
        target={user.link ? '_blank' : undefined}
        rel={user.link ? 'noreferrer noopener' : undefined}
        className={`${isFamous ? 'contents' : 'flex min-w-0 flex-1 items-center justify-between gap-2'} ${user.link ? 'group hover:text-primary-700 transition-all hover:underline' : ''}`}
      >
        <p className={isFamous ? 'whitespace-nowrap' : 'shrink-0'}>
          <span className="font-medium transition-all group-hover:font-bold">
            {type === 'famous' ? user.name : displayName || user.name}
          </span>{' '}
          turns{' '}
          <span className="text-primary-700 font-medium">{dayjs(selectedDate).diff(dayjs(user.birthday), 'year')}</span>
        </p>
        {children}
      </El>
      {onRemove && (
        <button
          type="button"
          aria-label={`Remove ${user.name}'s birthday`}
          onClick={onRemove}
          className="text-primary-400 hover:text-red-600 focus-visible:outline-primary-300 rounded p-1 focus-visible:outline-1"
        >
          <Trash size={16} weight="duotone" />
        </button>
      )}
    </li>
  );
}
