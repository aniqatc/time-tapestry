import React from 'react';
import { UserBirthday, FamousBirthday } from '../../../types';
import dayjs from 'dayjs';

interface BirthdayListItemProps {
  index: number;
  user: FamousBirthday | UserBirthday;
  type: 'user' | 'famous';
  displayName?: string;
  children: React.ReactNode;
}

export default function BirthdayListItem({ ...props }: BirthdayListItemProps): JSX.Element | null {
  const { user, type, displayName, index, children } = props;

  if (index >= 5) return null;
  const El = user.link ? 'a' : 'span';

  return (
    <El
      href={user.link}
      target="_blank"
      className={user.link && 'group hover:text-primary-700 transition-all hover:underline'}
    >
      <li
        className={`mb-0.5 flex items-center justify-between gap-2 ${type === 'user' && 'lowercase'}`}
      >
        <p className="shrink-0">
          <span className="font-medium transition-all group-hover:font-bold">
            {type === 'user' ? displayName : user.name}
          </span>{' '}
          turns{' '}
          <span className="text-primary-700 font-medium">
            {dayjs().year() - dayjs(user.birthday).year()}
          </span>
        </p>
        {children}
      </li>
    </El>
  );
}
