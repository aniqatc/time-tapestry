import dayjs from 'dayjs';

import { DatePicker, DatesProvider } from '@mantine/dates';
import { Indicator } from '@mantine/core';
import { useDateStore } from '@contexts';

import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@styles/calendar.css';

const siteEvents: number[] = [27, 10, 11, 4, 19]; // hard-coded for now
const userEvents: number[] = [new Date().getDate(), 9]; // hard-coded for now

function eventRenderer(date: Date): React.ReactNode {
  const day: number = date.getDate();
  const isSiteEvent: boolean = siteEvents.includes(day);
  const isUserEvent: boolean = userEvents.includes(day);

  return (
    <Indicator
      withBorder
      size={12}
      color={isUserEvent ? 'indigo' : 'pink'}
      disabled={!isSiteEvent && !isUserEvent}
      processing={isUserEvent}
      offset={-5}
    >
      <div>{day}</div>
    </Indicator>
  );
}

export default function Calendar(): JSX.Element {
  const selectedDate = useDateStore((state: { selectedDate: Date }) => state.selectedDate);
  const setSelectedDate = useDateStore((state: any) => state.setSelectedDate);

  return (
    <DatesProvider settings={{ consistentWeeks: true }}>
      <div className="border-gray-light rounded-sm border p-2">
        <DatePicker
          value={selectedDate}
          onChange={setSelectedDate}
          minDate={dayjs().subtract(100, 'year').toDate()}
          maxDate={dayjs().toDate()}
          renderDay={eventRenderer}
        />
      </div>
    </DatesProvider>
  );
}
