import React from 'react';
import { SubHeading } from '.';

interface PrimaryCardProps {
  children: React.ReactNode;
  className?: string;
  heading: string;
}

export default function PrimaryCard({
  heading,
  className,
  children,
}: PrimaryCardProps): JSX.Element {
  return (
    <span>
      {heading && <SubHeading>{heading}</SubHeading>}
      <div
        className={`shadow-primary bg-primary-75 border-primary-100 text-primary-500 rounded-sm border px-3 py-2 text-sm ${!heading && 'lg:mt-9'} ${className}`}
      >
        {children}
      </div>
    </span>
  );
}
