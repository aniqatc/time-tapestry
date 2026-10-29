// Purpose: Renders a compact label, optionally with a year badge.
import React from 'react';

interface LabelProps {
  className?: string;
  children: React.ReactNode;
  number?: boolean;
}

export default function Label({ number, className, children }: LabelProps): JSX.Element {
  return (
    <mark
      className={`border-primary-200 bg-primary-150 text-primary-500 my-0.5 block max-w-min rounded-xs border px-1.5 py-0.5 text-center text-[0.75rem] text-nowrap ${number ? 'min-w-12 font-mono' : 'font-medium'} ${className}`}
    >
      {children}
    </mark>
  );
}
