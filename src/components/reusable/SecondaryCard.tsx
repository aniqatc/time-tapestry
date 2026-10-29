// Purpose: Renders a smaller themed card or external link.
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
      className={`bg-primary-25 border-primary-100 mt-1 block rounded-sm border p-3 shadow-sm ${source && 'hover:bg-primary-50/10 active:bg-primary-50/10 active:shadow-primary hover:shadow-primary hover:text-primary-800 *:transition-all *:duration-200'} ${className}`}
      {...(source && { href: source, target: '_blank', rel: 'noopener noreferrer' })}
    >
      {children}
    </El>
  );
}
