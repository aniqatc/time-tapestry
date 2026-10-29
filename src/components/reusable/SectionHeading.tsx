import React from 'react';

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionHeading({ children, className }: SectionHeadingProps): JSX.Element {
  return <h2 className={`text-primary-900 text-md mx-3 mt-2 mb-1 font-semibold ${className ?? ''}`}>{children}</h2>;
}
