import React from 'react';

interface SecondaryCardProps {
  source?: string;
  children: React.ReactNode;
  className?: string;
}

export default function SecondaryCard({ ...props }: SecondaryCardProps): JSX.Element {
  const { source, children, className } = props;
  const El = source ? 'a' : 'div';

  return (
    <El
      className={`bg-primary-25 border-primary-100 mt-1 inline-block rounded-sm border p-2 shadow-xs ${className} ${source && 'hover:bg-primary-50/10 hover:shadow-primary hover:text-primary-800 *:transition-all *:duration-200'}`}
      {...(source && { href: source, target: '_blank', rel: 'noopener noreferrer' })}
    >
      {children}
    </El>
  );
}
