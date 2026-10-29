import dayjs from 'dayjs';

import { DatePicker, DatesProvider } from '@mantine/dates';
import { Indicator } from '@mantine/core';
import { useAuthStore, useBirthdayStore, useDateStore, DateState } from '../../contexts';

import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '../../styles/calendar.css';

export default function Calendar(): JSX.Element {
  const selectedDate = useDateStore((state: { selectedDate: Date }) => state.selectedDate);
  const setSelectedDate = useDateStore((state: DateState) => state.setSelectedDate);
  const birthdays = useBirthdayStore(state => state.birthdays);
  const userId = useAuthStore(state => state.session?.user.id ?? null);

  return (
    <DatesProvider settings={{ consistentWeeks: true }}>
      <div className="border-gray-light rounded-sm border p-1">
        <DatePicker
          value={selectedDate}
          onChange={setSelectedDate}
          minDate={dayjs().subtract(100, 'year').toDate()}
          maxDate={dayjs().toDate()}
          renderDay={date => eventRenderer(date, birthdays, userId)}
        />
        <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 px-1 text-[10px] text-primary-500">
          <li className="flex items-center gap-1.5">
            <span aria-hidden="true" className="size-2 rounded-full bg-indigo-500" />
            Your birthdays
          </li>
          <li className="flex items-center gap-1.5">
            <span aria-hidden="true" className="size-2 rounded-full bg-pink-500" />
            Community birthdays
          </li>
        </ul>
      </div>
    </DatesProvider>
  );
}

function eventRenderer(
  date: Date,
  birthdays: ReturnType<typeof useBirthdayStore.getState>['birthdays'],
  userId: string | null
): React.ReactNode {
  // Represents each calendar date
  const day: number = date.getDate();
  const month: number = date.getMonth();
  const year: number = date.getFullYear();
  const matchesDay = (birthday: (typeof birthdays)[number]): boolean =>
    birthday.birthday.getMonth() === month &&
    birthday.birthday.getDate() === day &&
    birthday.birthday.getFullYear() <= year;
  const isPersonalBirthday = Boolean(userId) && birthdays.some(birthday => birthday.ownerId === userId && matchesDay(birthday));
  const isCommunityBirthday = birthdays.some(
    birthday =>
      birthday.visibility === 'public' &&
      birthday.ownerId === null &&
      matchesDay(birthday)
  );
  const hasBirthday = isPersonalBirthday || isCommunityBirthday;

  return (
    <Indicator
      withBorder
      size={12}
      color={isPersonalBirthday ? 'indigo' : 'pink'}
      disabled={!hasBirthday}
      offset={-5}
    >
      <div>{day}</div>
    </Indicator>
  );
}
