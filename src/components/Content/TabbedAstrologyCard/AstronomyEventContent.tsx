import { InnerHeading, SecondaryCard } from '../../reusable';
import { Lightning, MapPin, ArrowUpRight } from '@phosphor-icons/react';

interface EVENT {
  year: number;
  description: string;
  location: {
    lat?: number;
    lon?: number;
    string?: string;
  };
  source?: string;
}

const EXAMPLE_EVENTS: EVENT[] = [
  {
    year: 1969,
    description:
      'Apollo 11 astronauts Neil Armstrong and Buzz Aldrin become the first humans to land on the Moon.',
    location: {
      lat: -90,
      lon: 100,
      string: 'Cape Canaveral, FL',
    },
    source: '#',
  },
  {
    year: 1969,
    description:
      'Apollo 11 astronauts Neil Armstrong and Buzz Aldrin become the first humans to land on the Moon.',
    location: {
      lat: -90,
      lon: 100,
      string: 'Washington, MA',
    },
    source: '#',
  },
  {
    year: 1969,
    description:
      'Apollo 11 astronauts Neil Armstrong and Buzz Aldrin become the first humans to land on the Moon.',
    location: {
      lat: -90,
      lon: 100,
      string: 'New York, NY',
    },
  },
];

export default function AstronomyEventContent(): JSX.Element {
  return (
    <>
      <InnerHeading title="Special Astronomy Events" />
      <ul className="flex flex-wrap gap-2 md:flex-nowrap">
        {EXAMPLE_EVENTS.map(event => {
          return (
            <SecondaryCard key={crypto.randomUUID()} source={event.source} className="group">
              <li className="flex flex-col gap-3">
                <span className="flex items-center justify-between gap-1 text-base font-semibold">
                  <Lightning size={16} weight="duotone" />
                  <span className="mr-auto">{event.year}</span>
                  {event.source && (
                    <ArrowUpRight
                      size={18}
                      weight="bold"
                      className="text-primary-30 group-active:text-primary-800 group-hover:text-primary-800 shrink-0 transition-all group-hover:rotate-45 group-active:rotate-45"
                    />
                  )}
                </span>
                <span className="">{event.description}</span>
                <span className="text-primary-400 -ml-1 flex items-center gap-0.5 overflow-hidden text-xs text-nowrap">
                  <MapPin size={16} weight="duotone" className="text-primary-500" />
                  {event.location.string}
                </span>
              </li>
            </SecondaryCard>
          );
        })}
      </ul>
    </>
  );
}
