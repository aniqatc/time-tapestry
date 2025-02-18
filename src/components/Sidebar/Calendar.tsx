import { DatePicker, DatePickerProps } from '@mantine/dates';
import { Indicator } from '@mantine/core';
import { MantineProvider, createTheme } from '@mantine/core';

import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';

import '@styles/calendar.css';

const theme = createTheme({
  fontFamily: 'inherit',
});

export default function Calendar(): JSX.Element {
  return (
    <MantineProvider theme={theme}>
      <div className="border-gray-light rounded-sm border p-2">
        <DatePicker />
      </div>
    </MantineProvider>
  );
}
