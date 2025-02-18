import { create } from 'zustand';
import dayjs from 'dayjs';

interface DateState {
  selectedDate: Date;
  formattedDate: string;
  setSelectedDate: (date: Date) => void;
}

export const useDateStore = create<DateState>(set => ({
  selectedDate: new Date(),
  formattedDate: dayjs(new Date()).format('MMMM D, YYYY'),
  setSelectedDate: date =>
    set({ selectedDate: date, formattedDate: dayjs(date).format('MMMM D, YYYY') }),
}));
