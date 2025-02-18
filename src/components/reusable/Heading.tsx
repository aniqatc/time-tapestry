import React from 'react';

interface HeadingProps {
  children: React.ReactNode;
}

export default function Heading({ children }: HeadingProps): JSX.Element {
  return <h1 className="text-primary-800 text-2xl font-bold">{children}</h1>;
}
