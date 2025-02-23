import { PrimaryCard } from '../../../components/reusable';
import { useDateStore } from '../../../contexts';
import { notableEvents } from '../../../data/dummy';
import EventItem from './EventItem';

export default function NotableEventsCard(): JSX.Element {
  const shortFormattedDate = useDateStore(
    (state: { shortFormattedDate: string }) => state.shortFormattedDate
  );

  return (
    <PrimaryCard heading={`Notable Events on ${shortFormattedDate}`}>
      <ul className="flex flex-col gap-2">
        {notableEvents.map(event => (
          <EventItem key={crypto.randomUUID()} source={event.source} year={event.year}>
            {event.description}
          </EventItem>
        ))}
      </ul>
    </PrimaryCard>
  );
}
