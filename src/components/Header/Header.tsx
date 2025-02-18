import { Heading } from '../';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  className?: string;
}

export default function Header({ className = '' }: HeaderProps): JSX.Element {
  return (
    <header className={`flex px-3 py-4 justify-between${className}`}>
      <Heading>timetapestry</Heading>
      <ThemeToggle />
    </header>
  );
}
