import { Heading } from '../';
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
      <Heading>timetapestry</Heading>
      <div className="flex items-center gap-3">
        <AuthControl />
        <ThemeToggle />
      </div>
    </header>
  );
}
