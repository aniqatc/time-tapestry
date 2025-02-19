import React from 'react';

interface LabelProps {
  className?: string;
  children: React.ReactNode;
}

export default function Label({ className, children }: LabelProps): JSX.Element {
  return (
    <mark
      className={`border-primary-200 bg-primary-150 text-primary-500 my-0.5 block max-w-min rounded-xs border px-1.5 py-0.5 text-center font-mono text-[0.75rem] font-medium text-nowrap ${className}`}
    >
      {children}
    </mark>
  );
}
