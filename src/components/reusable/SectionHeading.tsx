import React from 'react';

interface SectionHeadingProps {
  children: React.ReactNode;
}

export default function SectionHeading({ children }: SectionHeadingProps): JSX.Element {
  return <h2 className="text-primary-900 text-md mx-3 mt-2 mb-1 font-semibold">{children}</h2>;
}
