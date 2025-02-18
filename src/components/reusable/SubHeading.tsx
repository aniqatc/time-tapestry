import React from 'react';

interface SubHeadingProps {
  children: React.ReactNode;
}

export default function Heading({ children }: SubHeadingProps): JSX.Element {
  return <h2 className="text-primary-900 text-md m-2 font-semibold">{children}</h2>;
}
