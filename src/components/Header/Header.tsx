import { Heading } from '../';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  className?: string;
}

export default function Header({ className = '' }: HeaderProps): JSX.Element {
  return (
    <header className={`flex items-center justify-between px-3 py-4 ${className}`}>
      <Heading>timetapestry</Heading>
      <ThemeToggle />
    </header>
  );
}
