import ThemeToggle from './ThemeToggle';
import AuthControl from './AuthControl';

interface HeaderProps {
  className?: string;
}

export default function Header({ className = '' }: HeaderProps): JSX.Element {
  return (
    <header
      className={`bg-primary-25/25 sticky top-0 z-100 flex items-center justify-between px-3 pt-4 pb-1 backdrop-blur-xs ${className}`}
    >
      <a href="/" aria-label="Time Tapestry home" className="flex items-center gap-2.5">
        <svg aria-hidden="true" viewBox="0 0 48 48" className="size-9 shrink-0">
          <rect x="1" y="1" width="46" height="46" rx="15" fill="#e8eef8" />
          <rect x="9" y="11" width="30" height="28" rx="6" fill="#f9fbff" stroke="#9aafcc" strokeWidth="1.5" />
          <path d="M9 17a6 6 0 0 1 6-6h18a6 6 0 0 1 6 6v3H9z" fill="#526f98" />
          <path d="M17 8v7m14-7v7" stroke="#526f98" strokeWidth="3" strokeLinecap="round" />
          <path d="M14 25h20M14 31h20" stroke="#b8c7dc" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M17 23v10m7-8v8m7-10v10" stroke="#d4a85d" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="34" cy="32" r="3.5" fill="#526f98" stroke="#f9fbff" strokeWidth="1.5" />
        </svg>
        <span className="flex flex-col leading-none">
          <span className="text-primary-500 text-[9px] font-semibold tracking-[0.2em] uppercase">Time</span>
          <span className="text-primary-900 text-xl font-bold tracking-tight">Tapestry</span>
        </span>
      </a>
      <div className="flex items-center gap-3">
        <AuthControl />
        <ThemeToggle />
      </div>
    </header>
  );
}
