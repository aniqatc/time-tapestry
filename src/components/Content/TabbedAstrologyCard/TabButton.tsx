// Purpose: Renders one selectable astrology tab.
import React from 'react';
import { motion } from 'motion/react';

interface TabButtonProps {
  Icon: React.ElementType;
  isActive: boolean;
  index: number;
  children: React.ReactNode;
  setActive: (index: number) => void;
}

export default function TabButton({ ...props }: TabButtonProps): JSX.Element {
  const { Icon, index, children, isActive, setActive } = props;

  return (
    <motion.button
      initial={{ opacity: 0, y: 30 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.3, delay: index * 0.1, ease: 'easeIn' },
      }}
      onClick={() => setActive(index)}
      className={`hover:text-primary-800 focus-visible:outline-primary-500 mr-0.5 flex cursor-pointer items-center gap-1 rounded-t-sm border px-2 py-1 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 ${
        isActive
          ? 'shadow-primary bg-primary-75 border-primary-100 text-primary-900'
          : 'text-primary-400 border-primary-25'
      }`}
    >
      <Icon size={14} weight="duotone" />
      <span className={isActive ? 'block' : 'xs:hidden hidden min-[395px]:block min-[720px]:block'}>
        {children}
      </span>
    </motion.button>
  );
}
