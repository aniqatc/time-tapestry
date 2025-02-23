import dayjs from 'dayjs';

import { DatePicker, DatesProvider } from '@mantine/dates';
import { Indicator } from '@mantine/core';
import { useDateStore, DateState } from '../../contexts';
import { siteEvents, userEvents } from '../../data/dummy';

import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '../../styles/calendar.css';

export default function Calendar(): JSX.Element {
  const selectedDate = useDateStore((state: { selectedDate: Date }) => state.selectedDate);
  const setSelectedDate = useDateStore((state: DateState) => state.setSelectedDate);

  return (
    <DatesProvider settings={{ consistentWeeks: true }}>
      <div className="border-gray-light rounded-sm border p-1">
        <DatePicker
          value={selectedDate}
          onChange={setSelectedDate}
          minDate={dayjs().subtract(100, 'year').toDate()}
          maxDate={dayjs().toDate()}
          renderDay={eventRenderer} /* Shows an indicator based on saved events */
        />
      </div>
    </DatesProvider>
  );
}

function eventRenderer(date: Date): React.ReactNode {
  // Represents each calendar date
  const day: number = date.getDate();
  const month: number = date.getMonth();

  // Matches the saved events with calendar date & adds relevant color if event exists for that day
  // Month and day must match (in which case, disabled would be set to false)
  const isSiteEvent = siteEvents.some(event => event.month === month && event.day === day);
  const isUserEvent = userEvents.some(event => event.month === month && event.day === day);

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
