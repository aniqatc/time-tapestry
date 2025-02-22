import { useState, useEffect } from 'react';
import { Cake } from '@phosphor-icons/react';
import { motion } from 'framer-motion';
import Calendar from './Calendar';
import BirthdayForm from './BirthdayForm';
import { useScreenSize } from '../../hooks';

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

  useEffect(() => {
    setIsExpanded(width >= 625);
  }, [width]);

  return (
    <MantineProvider theme={theme}>
      <motion.aside
        initial={false}
        animate={{
          width: isExpanded ? 315 : 50,
          transition: {
            duration: 0.3,
            ease: 'easeInOut',
          },
        }}
        className={`shadow-primary border-primary-200 max-xs:absolute sticky left-0 z-100 mr-auto flex h-full flex-col items-center gap-2 rounded-tr-sm rounded-br-sm border bg-white px-3 py-3 max-[625px]:cursor-pointer lg:absolute ${className}`}
        onMouseEnter={() => width < 625 && setIsExpanded(true)}
        onMouseLeave={() => width < 625 && setIsExpanded(false)}
        onClick={() => width < 625 && setIsExpanded(true)}
      >
        {isExpanded && (
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Calendar />
            <BirthdayForm />
          </motion.span>
        )}
        {!isExpanded && (
          <button className="text-primary-600 animate-subtle-shake flex items-center justify-center">
            <Cake size={24} weight="duotone" />
          </button>
        )}
      </motion.aside>
    </MantineProvider>
  );
}
