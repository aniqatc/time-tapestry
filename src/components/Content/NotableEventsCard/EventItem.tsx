// Purpose: Renders one linked historical event.
import { Label } from '../../../components/reusable';
import { ArrowUpRight } from '@phosphor-icons/react';
import React from 'react';

interface EventItemProps {
  source: string;
  year: number;
  children: React.ReactNode;
}

export default function EventItem({ ...props }: EventItemProps): JSX.Element {
  const { source, year, children } = props;

  return (
    <li>
      <a
        href={source}
        target="_blank"
        rel="noreferrer noopener"
        className="group hover:bg-primary-50/45 active:bg-primary-50/45 -mx-2 -my-1 flex items-start justify-between gap-2 rounded-xs px-2 py-1 *:transition-all *:duration-200"
      >
        <Label className="group-hover:text-primary-500 group-active:text-primary-500" number={true}>
          {year}
        </Label>
        <span className="group-hover:text-primary-700 group-active:text-primary-700 mr-auto">{children}</span>
        <ArrowUpRight
          size={20}
          className="text-primary-30 group-active:text-primary-800 group-hover:text-primary-800 mt-1 ml-2 shrink-0 group-hover:rotate-45 group-active:rotate-45"
        />
      </a>
    </li>
  );
}
