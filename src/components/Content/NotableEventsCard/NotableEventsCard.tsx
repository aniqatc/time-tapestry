import { useEffect, useState } from 'react';
import { PrimaryCard } from '../../../components/reusable';
import { useDateStore } from '../../../contexts';
import EventItem from './EventItem';
import { fetchEventsFromWikimedia } from '../../../data';
import { NotableEvent } from '../../../types';
import { Loading } from '../../reusable';

export default function NotableEventsCard(): JSX.Element {
  const selectedDate = useDateStore((state: { selectedDate: Date }) => state.selectedDate);
  const shortFormattedDate = useDateStore((state: { shortFormattedDate: string }) => state.shortFormattedDate);
  const [notableEvents, setNotableEvents] = useState<NotableEvent[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function loadEvents() {
      setIsLoading(true);
      try {
        const fetchedEvents = await fetchEventsFromWikimedia(selectedDate.getDate(), selectedDate.getMonth());
        setNotableEvents(fetchedEvents);
      } catch {
        console.log('Error fetching events from Wikimedia API. Try again later.');
      } finally {
        setIsLoading(false);
      }
    }
    loadEvents();
  }, [selectedDate]);

  if (notableEvents.length < 0) return <></>;

  return (
    <PrimaryCard heading={`Notable Events on ${shortFormattedDate}`}>
      {isLoading ? (
        <Loading />
      ) : (
        <ul className="flex flex-col gap-2">
          {notableEvents.map(event => (
            <EventItem key={crypto.randomUUID()} source={event.source} year={event.year}>
              {event.description}
            </EventItem>
          ))}
        </ul>
      )}
    </PrimaryCard>
  );
}
