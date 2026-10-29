// Purpose: Combines the personal and notable birthday cards.
import VerifiedUsersCard from './VerifiedUsersCard';
import NotableFiguresCard from './NotableFiguresCard';

export default function BirthdaysCard(): JSX.Element {
  return (
    <>
      <VerifiedUsersCard />
      <NotableFiguresCard />
    </>
  );
}
