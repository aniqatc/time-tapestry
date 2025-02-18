import dayjs from 'dayjs';

import { DatePicker } from '@mantine/dates';
import { Indicator } from '@mantine/core';
import { MantineProvider, createTheme } from '@mantine/core';
import { useState } from 'react';

import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@styles/calendar.css';

const theme = createTheme({
  fontFamily: 'inherit',
});

const siteEvents: number[] = [27, 10, 11, 4, 19]; // hard-coded for now
const userEvents: number[] = [new Date().getDate(), 9]; // hard-coded for now

function eventRenderer(date: Date): React.ReactNode {
  const day: number = date.getDate();
  const isEvent: boolean = siteEvents.includes(day);
  const isUserEvent: boolean = userEvents.includes(day);

  return (
    <Indicator
      withBorder
      size={12}
      color={isUserEvent ? 'indigo' : 'pink'}
      disabled={!isEvent && !isUserEvent}
      processing={isUserEvent}
      offset={-5}
    >
      <div>{day}</div>
    </Indicator>
  );
}

export default function Calendar(): JSX.Element {
  const [date, setDate] = useState<Date | null>(dayjs().toDate());

  return (
    <MantineProvider theme={theme}>
      <div className="border-gray-light rounded-sm border p-2">
        <DatePicker
          value={date}
          onChange={setDate}
          minDate={dayjs().subtract(100, 'year').toDate()}
          maxDate={dayjs().toDate()}
          renderDay={eventRenderer}
        />
      </div>
    </MantineProvider>
  );
}
