import React from 'react';

interface LabelProps {
  className?: string;
  children: React.ReactNode;
}

export default function Label({ className, children }: LabelProps): JSX.Element {
  return (
    <mark
      className={`bg-primary-150 text-primary-400 my-0.5 block max-w-min rounded-xs px-1.5 py-0.5 text-center text-[0.8rem] text-nowrap ${className}`}
    >
      {children}
    </mark>
  );
}
