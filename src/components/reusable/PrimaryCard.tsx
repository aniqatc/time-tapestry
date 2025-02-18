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
    <>
      <SubHeading>{heading}</SubHeading>
      <div
        className={`shadow-primary bg-primary-75 border-primary-100 text-primary-500 rounded-sm border px-2 py-2 text-sm ${className}`}
      >
        {children}
      </div>
    </>
  );
}
