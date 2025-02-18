import { Heading } from '../';

interface HeaderProps {
  className?: string;
}

export default function Header({ className = '' }: HeaderProps): JSX.Element {
  return (
    <header className={`px-3 py-4 ${className}`}>
      <Heading>timetapestry</Heading>
    </header>
  );
}
