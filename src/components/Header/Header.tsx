// Purpose: Renders the brand, account control, and theme toggle.
import Heading from '../reusable/Heading';
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
      <a href="/" aria-label="Time Tapestry home" className="flex items-center">
        <Heading className="leading-none">
          <span className="flex flex-col">
            <span className="text-primary-500 text-[9px] font-semibold tracking-[0.2em] uppercase">Time</span>
            <span className="text-primary-900 text-xl font-bold tracking-tight">Tapestry</span>
          </span>
        </Heading>
      </a>
      <div className="flex items-center gap-3">
        <AuthControl />
        <ThemeToggle />
      </div>
    </header>
  );
}
