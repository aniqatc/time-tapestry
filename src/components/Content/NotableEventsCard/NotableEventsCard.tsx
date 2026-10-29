// Purpose: Loads and displays historical events for the selected date.
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
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    async function loadEvents() {
      setIsLoading(true);
      setLoadError(null);
      try {
        const fetchedEvents = await fetchEventsFromWikimedia(selectedDate.getDate(), selectedDate.getMonth());
        if (active) setNotableEvents(fetchedEvents);
      } catch (error) {
        if (active) {
          setNotableEvents([]);
          setLoadError(error instanceof Error ? error.message : 'Could not load historical events.');
        }
      } finally {
        if (active) setIsLoading(false);
      }
    }
    void loadEvents();
    return () => {
      active = false;
    };
  }, [selectedDate]);

  return (
    <PrimaryCard heading={`Notable Events on ${shortFormattedDate}`}>
      {isLoading ? (
        <Loading />
      ) : loadError ? (
        <p role="status" className="text-primary-500 text-sm">{loadError}</p>
      ) : notableEvents.length === 0 ? (
        <p className="text-primary-500 text-sm">No notable events found for this date.</p>
      ) : (
        <ul className="flex flex-col gap-2">
          {notableEvents.map(event => (
            <EventItem key={`${event.year}-${event.source}`} source={event.source} year={event.year}>
              {event.description}
            </EventItem>
          ))}
        </ul>
      )}
    </PrimaryCard>
  );
}
