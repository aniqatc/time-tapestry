import { Heading } from '../';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  className?: string;
}

export default function Header({ className = '' }: HeaderProps): JSX.Element {
  return (
    <header
      className={`bg-primary-25/25 sticky top-0 z-100 flex items-center justify-between px-3 pt-4 pb-1 backdrop-blur-xs ${className}`}
    >
      <Heading>timetapestry</Heading>
      <ThemeToggle />
    </header>
  );
}
