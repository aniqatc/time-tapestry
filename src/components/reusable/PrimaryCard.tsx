import React from 'react';
import { SectionHeading } from '.';

interface PrimaryCardProps {
  children: React.ReactNode;
  className?: string;
  heading: string;
}

export default function PrimaryCard({ ...props }: PrimaryCardProps): JSX.Element {
  const { heading, className, children } = props;

  return (
    <span>
      {heading && <SectionHeading>{heading}</SectionHeading>}
      <div
        className={`shadow-primary bg-primary-75 border-primary-100 text-primary-500 rounded-sm border p-3 text-sm ${!heading && 'lg:mt-9'} ${className}`}
      >
        {children}
      </div>
    </span>
  );
}
