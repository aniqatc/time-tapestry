import { PrimaryCard, Label } from '@components/reusable';
import { useDateStore } from '@contexts';

export default function BirthdaysCard(): JSX.Element {
  const shortFormattedDate = useDateStore(
    (state: { shortFormattedDate: string }) => state.shortFormattedDate
  );

  return (
    <>
      <PrimaryCard heading={`Birthdays on ${shortFormattedDate}`}>
        <Label className="mb-2">Notable Persons</Label>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </PrimaryCard>
      <PrimaryCard>
        <Label className="mb-2">User Birthdays</Label>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </PrimaryCard>
    </>
  );
}
