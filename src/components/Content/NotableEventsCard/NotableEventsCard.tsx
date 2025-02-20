import { PrimaryCard } from '../../../components/reusable';
import { useDateStore } from '../../../contexts';
import EventItem from './EventItem';

export default function NotableEventsCard(): JSX.Element {
  const shortFormattedDate = useDateStore(
    (state: { shortFormattedDate: string }) => state.shortFormattedDate
  );

  return (
    <PrimaryCard heading={`Notable Events on ${shortFormattedDate}`}>
      <ul className="flex flex-col gap-2">
        <EventItem year={1992} source="#">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </EventItem>
        <EventItem year={1992} source="#">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </EventItem>
        <EventItem year={1992} source="#">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </EventItem>
      </ul>
    </PrimaryCard>
  );
}
