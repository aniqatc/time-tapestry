// Purpose: Displays upcoming lunar phases and eclipse events.
import { useMemo } from 'react';
import { InnerHeading, SecondaryCard } from '../../reusable';
import { Lightning } from '@phosphor-icons/react';
import { useDateStore } from '../../../contexts';
import { formatEventDate, getAstronomyEvents } from '../../../utils/astrology';

export default function AstronomyEventContent(): JSX.Element {
  const selectedDate = useDateStore(state => state.selectedDate);
  const events = useMemo(() => getAstronomyEvents(selectedDate), [selectedDate]);

  return (
    <>
      <InnerHeading title="Upcoming Astronomy Events" />
      {events.length ? (
        <ul className="grid gap-3 sm:auto-rows-fr sm:grid-cols-2">
          {events.map(event => (
            <li key={`${event.title}-${event.date.toISOString()}`}>
              <SecondaryCard className="h-full">
                <div className="flex h-full flex-col gap-3">
                  <div className="flex items-start gap-3">
                    <span className="bg-primary-100 text-primary-500 mt-0.5 rounded-full p-2">
                      <Lightning size={16} weight="duotone" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-primary-700 text-sm font-semibold">{event.title}</p>
                      <p className="text-primary-400 mt-1 text-xs">{formatEventDate(event.date)}</p>
                    </div>
                  </div>
                  <p className="text-primary-500 text-sm">{event.description}</p>
                </div>
              </SecondaryCard>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-primary-400 px-2 py-4 text-sm">No major lunar events found in the coming months.</p>
      )}
    </>
  );
}
