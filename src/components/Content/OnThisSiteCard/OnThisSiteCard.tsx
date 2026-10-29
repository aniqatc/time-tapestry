import { PrimaryCard } from '../../../components/reusable';
import { Calendar, CalendarX, UsersThree } from '@phosphor-icons/react';
import { MAX_SAVED_BIRTHDAYS, useAuthStore, useBirthdayStore } from '../../../contexts';

export default function OnThisSiteCard(): JSX.Element {
  const birthdays = useBirthdayStore(state => state.birthdays);
  const userId = useAuthStore(state => state.session?.user.id ?? null);
  const ownBirthdays = userId ? birthdays.filter(birthday => birthday.ownerId === userId) : [];
  const publicBirthdays = birthdays.filter(birthday => birthday.visibility === 'public');
  const uniqueDates = new Set(publicBirthdays.map(({ birthday }) => `${birthday.getMonth()}-${birthday.getDate()}`));
  const currentYear = new Date().getFullYear();
  const daysInYear = new Date(currentYear, 1, 29).getMonth() === 1 ? 366 : 365;
  const data = [
    { Icon: UsersThree, stat: 'Your saved birthdays', value: `${ownBirthdays.length}/${MAX_SAVED_BIRTHDAYS}` },
    { Icon: Calendar, stat: 'Community dates covered', value: `${uniqueDates.size} days` },
    { Icon: CalendarX, stat: 'Community dates without entries', value: `${daysInYear - uniqueDates.size} days` },
  ];

  return (
    <>
      <p className="text-primary-400 -mb-7 pt-3 pr-2 text-end text-xs">
        Community entries are shared by opt-in
      </p>
      <PrimaryCard heading="Your Birthday Stats" className="@container">
        <ul className="grid grid-cols-1 gap-1 @[410px]:grid-cols-2">
          {data.map(item => {
            return (
              <li key={item.stat} className="mb-1 flex items-center gap-1 @[480px]:mb-0">
                <item.Icon size={24} weight="duotone" className="text-primary-400" />
                <p className="text-primary-700 font-semibold @[410px]:flex @[410px]:flex-col @[480px]:block">
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
