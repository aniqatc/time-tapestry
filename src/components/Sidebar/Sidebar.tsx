import Calendar from './Calendar';
import BirthdayForm from './BirthdayForm';

import { MantineProvider, createTheme } from '@mantine/core';

interface SidebarProps {
  className?: string;
}

const theme = createTheme({
  fontFamily: 'inherit',
});

export default function Sidebar({ className = '' }: SidebarProps): JSX.Element {
  return (
    <MantineProvider theme={theme}>
      <aside
        className={`shadow-primary border-primary-200 sticky left-0 mr-auto flex h-[90%] flex-col items-center gap-2 rounded-tr-sm rounded-br-sm border bg-white px-3 py-3 xl:absolute ${className}`}
      >
        <Calendar />
        <BirthdayForm />
      </aside>
    </MantineProvider>
  );
}
