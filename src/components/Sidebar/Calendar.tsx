import { Indicator } from '@mantine/core';
import { DatePicker, DatePickerProps } from '@mantine/dates';

import '@styles/calendar.css';

export default function Calendar(): JSX.Element {
  return (
    <div className="border-gray-light rounded-sm border p-2">
      <DatePicker></DatePicker>
    </div>
  );
}
