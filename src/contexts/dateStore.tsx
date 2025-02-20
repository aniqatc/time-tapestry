import { create } from 'zustand';
import dayjs from 'dayjs';

export interface DateState {
  selectedDate: Date;
  formattedDate: string;
  shortFormattedDate: string;
  setSelectedDate: (date: Date) => void;
}

export const useDateStore = create<DateState>(set => ({
  selectedDate: new Date(),
  formattedDate: dayjs(new Date()).format('MMMM D, YYYY'),
  shortFormattedDate: dayjs(new Date()).format('MMMM D'),

  setSelectedDate: date =>
    set({
      selectedDate: date,
      formattedDate: dayjs(date).format('MMMM D, YYYY'),
      shortFormattedDate: dayjs(date).format('MMMM D'),
    }),
}));
