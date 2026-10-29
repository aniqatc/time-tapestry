// Purpose: Renders a themed card with an optional heading.
import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from '.';
import { useDateStore } from '../../contexts';

interface PrimaryCardProps {
  children: React.ReactNode;
  className?: string;
  heading?: string;
  headingClassName?: string;
  fillHeight?: boolean;
}

export default function PrimaryCard({ ...props }: PrimaryCardProps): JSX.Element {
  const { heading, headingClassName, className, fillHeight = false, children } = props;
  const selectedDate = useDateStore((state: { selectedDate: Date }) => state.selectedDate);

  return (
    <motion.article
      key={selectedDate}
      initial={{ opacity: 0.4, x: 25 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, ease: 'easeIn' }}
      className={`w-full min-w-0 ${fillHeight ? 'lg:flex lg:h-full lg:flex-col' : ''}`}
    >
      {heading && <SectionHeading className={headingClassName}>{heading}</SectionHeading>}
      <div
        className={`shadow-primary bg-primary-75 border-primary-100 text-primary-500 min-w-0 rounded-sm border p-3 text-sm ${fillHeight ? 'lg:flex-1' : ''} ${!heading && 'lg:mt-9'} ${className}`}
      >
        {children}
      </div>
    </motion.article>
  );
}
