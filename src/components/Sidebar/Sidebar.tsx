import Calendar from './Calendar';

interface SidebarProps {
  className?: string;
}

export default function Sidebar({ className = '' }: SidebarProps): JSX.Element {
  return (
    <aside
      className={`shadow-primary border-primary-200 flex h-[90%] w-[300px] flex-col items-center gap-2 rounded-tr-sm rounded-br-sm border bg-white px-2 py-3 ${className}`}
    >
      <Calendar />
    </aside>
  );
}
