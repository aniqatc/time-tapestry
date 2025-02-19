import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '.';

interface PrimaryCardProps {
  children: React.ReactNode;
  className?: string;
  heading: string;
  key?: string;
}

export default function PrimaryCard({ ...props }: PrimaryCardProps): JSX.Element {
  const { key, heading, className, children } = props;

  return (
    <motion.div
      key={heading || key}
      initial={{ opacity: 0.4, x: 25 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, ease: 'easeIn' }}
    >
      {heading && <SectionHeading>{heading}</SectionHeading>}
      <div
        className={`shadow-primary bg-primary-75 border-primary-100 text-primary-500 rounded-sm border p-3 text-sm ${!heading && 'lg:mt-9'} ${className}`}
      >
        {children}
      </div>
    </motion.div>
  );
}
