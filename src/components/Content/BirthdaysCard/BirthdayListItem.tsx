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
  const El = user.link ? 'a' : 'span';

  return (
    <li
      className={`mb-0.5 flex justify-between gap-2 ${type === 'famous' ? 'items-start' : 'items-center'} ${type === 'user' && 'lowercase'}`}
    >
      <El
        href={user.link}
        target={user.link ? '_blank' : undefined}
        rel={user.link ? 'noreferrer noopener' : undefined}
        className={`flex min-w-0 flex-1 justify-between gap-2 ${type === 'famous' ? 'items-start' : 'items-center'} ${user.link ? 'group hover:text-primary-700 transition-all hover:underline' : ''}`}
      >
        <p className={type === 'famous' ? 'min-w-0 flex-1 break-words' : 'shrink-0'}>
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
