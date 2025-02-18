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
      className={`border-gray-light text-gray-medium flex h-9 w-full items-center justify-between gap-2 rounded-sm border px-2 py-1 text-sm ${isFocused ? 'outline-primary-200 outline-2' : 'outline-0'} ${className}`}
    >
      <label htmlFor={id} className="flex items-center justify-between gap-1">
        {icon && <span>{icon}</span>}
        <span className="text-[0.75rem] font-medium text-nowrap">{label}</span>
      </label>

      <div className="text-primary-800 w-full text-end font-medium">{children}</div>
    </div>
  );
}
