import React from 'react';

interface ButtonProps {
  className?: string;
  textClassName?: string;
  children: React.ReactNode;
  icon: JSX.Element;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export default function PrimaryButton({
  icon,
  className,
  textClassName,
  children,
  ...rest
}: ButtonProps): JSX.Element {
  return (
    <button
      {...rest}
      className={`hover:bg-primary-150 hover:border-primary-300 hover:shadow-primary active:bg-primary-100 bg-primary-75 border-primary-100 focus-visible:outline-primary-300 flex h-9 cursor-pointer items-center justify-center gap-1.5 rounded-sm border px-2.5 py-1 transition-all focus-visible:outline-1 active:translate-y-0.5 active:shadow-sm disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    >
      {icon && <span className="text-primary-700">{icon}</span>}
      <span className={`text-primary-900 flex items-center gap-1 text-[13px] font-bold ${textClassName ?? ''}`}>
        {children}
      </span>
    </button>
  );
}
