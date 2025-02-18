import React from 'react';

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  icon: JSX.Element;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export default function PrimaryButton({
  icon,
  className,
  children,
  ...rest
}: ButtonProps): JSX.Element {
  return (
    <button
      {...rest}
      className={`hover:bg-primary-150 hover:border-primary-300 hover:shadow-primary active:bg-primary-100 bg-primary-75 border-primary-100 focus-visible:outline-blue-550 flex h-9 cursor-pointer items-center justify-center gap-1 rounded-sm border px-2 py-1 transition-all focus-visible:outline-1 active:translate-y-0.5 active:shadow-sm ${className}`}
    >
      {icon && <span className="text-primary-700">{icon}</span>}
      <span className="text-primary-900 flex items-center gap-1 text-sm font-bold">{children}</span>
    </button>
  );
}
