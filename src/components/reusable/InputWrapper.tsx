import React from 'react';

interface InputProps {
  children: React.ReactNode;
  className?: string;
  label?: string;
  icon?: JSX.Element;
  id?: string;
  isFocused?: boolean;
}

export default function InputWrapper({ ...props }: InputProps): JSX.Element {
  const { id, className, icon, label, isFocused, children } = props;

  return (
    <div
      className={`bg-primary-75 border-primary-200 flex min-h-9 w-full items-center gap-2 rounded-sm border px-2 text-[11px] transition-colors ${
        isFocused ? 'border-primary-400 ring-primary-100 ring-2' : 'hover:border-primary-300'
      } ${className ?? ''}`}
    >
      <label htmlFor={id} className="text-primary-700 flex w-24 shrink-0 items-center gap-1.5 text-[11px] font-semibold">
        {icon && <span className="text-primary-500 flex shrink-0">{icon}</span>}
        <span className="truncate">{label}</span>
      </label>
      <div
        className="text-primary-800 min-w-0 flex-1 text-end font-medium"
      >
        {children}
      </div>
    </div>
  );
}
