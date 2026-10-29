// Purpose: Renders a label and value separated by a rule.
import React from 'react';
import { Icon } from '@phosphor-icons/react';

interface LinedListItemProps {
  label: string;
  children?: React.ReactNode;
  className?: string;
  Icon?: Icon;
}

export default function LinedListItem({ ...props }: LinedListItemProps): JSX.Element {
  const { label, children, className, Icon } = props;

  return (
    <li className={`flex items-center gap-2 ${className}`}>
      <span className="flex items-center gap-1 text-sm font-semibold">
        {Icon && <Icon size={14} weight="duotone" className="text-primary-400" />} {label}
      </span>
      <span className="bg-primary-300/40 h-[1px] w-full"></span>
      <span className="text-primary-600">{children}</span>
    </li>
  );
}
