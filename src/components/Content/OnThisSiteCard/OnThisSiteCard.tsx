// Purpose: Summarizes dates covered by public community birthdays.
import { PrimaryCard } from '../../../components/reusable';
import { Calendar, CalendarX, UsersThree } from '@phosphor-icons/react';
import { useBirthdayStore } from '../../../contexts';

export default function OnThisSiteCard(): JSX.Element {
  const birthdays = useBirthdayStore(state => state.birthdays);
  const publicBirthdays = birthdays.filter(birthday => birthday.visibility === 'public');
  const uniqueDates = new Set(publicBirthdays.map(({ birthday }) => `${birthday.getMonth()}-${birthday.getDate()}`));
  const currentYear = new Date().getFullYear();
  const daysInYear = new Date(currentYear, 1, 29).getMonth() === 1 ? 366 : 365;
  const formatDays = (count: number): string => `${count} ${count === 1 ? 'day' : 'days'}`;
  const data = [
    { Icon: UsersThree, stat: 'Public birthdays shared', value: `${publicBirthdays.length}` },
    { Icon: Calendar, stat: 'Community dates covered', value: formatDays(uniqueDates.size) },
    { Icon: CalendarX, stat: 'Community dates without entries', value: formatDays(daysInYear - uniqueDates.size) },
  ];

  return (
    <>
      <PrimaryCard heading="Community Birthday Stats" className="@container">
        <ul className="grid grid-cols-1 gap-1 @[410px]:grid-cols-2">
          {data.map(item => {
            return (
              <li key={item.stat} className="mb-1 flex items-center gap-1 @[480px]:mb-0">
                <item.Icon size={20} weight="duotone" className="text-primary-400" />
                <p className="text-primary-700 text-[13px] font-semibold @[410px]:flex @[410px]:flex-col @[480px]:block">
                  {item.stat} <span className="text-primary-600 text-xs font-normal">{item.value}</span>
                </p>
              </li>
            );
          })}
        </ul>
      </PrimaryCard>
    </>
  );
}
