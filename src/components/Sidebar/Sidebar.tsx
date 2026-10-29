// Purpose: Combines the calendar and birthday management controls.
import { useState, useEffect } from 'react';
import { Cake } from '@phosphor-icons/react';
import { motion } from 'motion/react';
import Calendar from './Calendar';
import BirthdayForm from './BirthdayForm';
import SavedBirthdaysList from './SavedBirthdaysList';
import { useScreenSize } from '../../hooks';
import { useThemeStore } from '../../contexts';

import { MantineProvider, createTheme } from '@mantine/core';

interface SidebarProps {
  className?: string;
}

const theme = createTheme({
  fontFamily: 'inherit',
});

export default function Sidebar({ className = '' }: SidebarProps): JSX.Element {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const { width } = useScreenSize();
  const colorScheme = useThemeStore(state => state.theme);

  useEffect(() => {
    setIsExpanded(width >= 640);
  }, [width]);

  return (
    <MantineProvider theme={theme} forceColorScheme={colorScheme}>
      <motion.aside
        initial={false}
        animate={{ width: isExpanded ? 315 : 50 }}
        className={`shadow-primary border-primary-200 fixed top-14 bottom-4 z-100 mr-auto flex h-auto max-h-[calc(100dvh-5rem)] flex-col items-center gap-2 overflow-y-auto overscroll-contain rounded-tr-sm rounded-br-sm border bg-white px-3 py-3 max-sm:cursor-pointer ${className}`}
        onMouseEnter={() => width < 640 && setIsExpanded(true)}
        onMouseLeave={() => width < 640 && setIsExpanded(false)}
        onClick={() => width < 640 && setIsExpanded(true)}
      >
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="w-full"
          >
            <Calendar />
            <BirthdayForm />
            <SavedBirthdaysList />
          </motion.div>
        )}
        {!isExpanded && (
          <button
            type="button"
            aria-label="Open birthday sidebar"
            title="Hover or click to open"
            className="text-primary-600 animate-subtle-shake flex flex-col items-center justify-center gap-1"
          >
            <Cake size={24} weight="duotone" />
            <span className="text-[9px] leading-none font-medium">Open</span>
          </button>
        )}
      </motion.aside>
    </MantineProvider>
  );
}
