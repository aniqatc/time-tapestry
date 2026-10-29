// Purpose: Renders the page-level heading.
import React from 'react';

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

export default function Heading({ children, className }: HeadingProps): JSX.Element {
  return <h1 className={`text-primary-800 text-2xl font-bold ${className ?? ''}`}>{children}</h1>;
}
