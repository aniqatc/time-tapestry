import dayjs from 'dayjs';

import { CalendarDots } from '@phosphor-icons/react';
import { InputWrapper } from '../reusable';

export default function SelectedDate(): JSX.Element {
  return (
    <InputWrapper icon={<CalendarDots size={24} weight="duotone" />} label="Selected">
      <p>{dayjs(dayjs().toDate()).format('MMMM D, YYYY') /* hard-coded for now */}</p>
    </InputWrapper>
  );
}
