import { Heading } from '../';

interface HeaderProps {
  className?: string;
}

export default function Header({ className = '' }: HeaderProps): JSX.Element {
  return (
    <header className={`p-3 ${className}`}>
      <Heading>timetapestry</Heading>
    </header>
  );
}
