// Purpose: Fetches notable events and birthdays from Wikimedia.
import { NotableEvent } from '../types';
import { FamousBirthday } from '../types';

interface WikimediaPage {
  extract?: string;
  content_urls?: { desktop?: { page?: string } };
}

interface WikimediaEntry {
  year: number;
  text: string;
  pages?: WikimediaPage[];
  deaths?: unknown;
}

interface WikimediaResponse {
  events?: WikimediaEntry[];
  births?: WikimediaEntry[];
}

const API_URL = 'https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday';

export async function fetchEventsFromWikimedia(day: number, month: number): Promise<NotableEvent[]> {
  const response = await fetch(`${API_URL}/events/${month + 1}/${day}`);
  if (!response.ok) throw new Error(`Wikimedia returned ${response.status}.`);
  const data = (await response.json()) as WikimediaResponse;
  const events = (data.events ?? [])
    .map(event => ({
      day,
      month,
      year: event.year,
      description: event.text,
      source: event.pages?.[0]?.content_urls?.desktop?.page,
      pageCount: event.pages?.length ?? 0,
    }))
    .filter((event): event is NotableEvent => Boolean(event.source));

  return events.sort((a, b) => (b.pageCount ?? 0) - (a.pageCount ?? 0)).slice(0, 3);
}

export async function fetchBirthdaysFromWikimedia(day: number, month: number): Promise<FamousBirthday[]> {
  const response = await fetch(`${API_URL}/births/${month + 1}/${day}`);
  if (!response.ok) throw new Error(`Wikimedia returned ${response.status}.`);
  const data = (await response.json()) as WikimediaResponse;
  const livingPeople = (data.births ?? []).filter(person => {
      const noDeathInfoAvailable = !person.deaths;
      const birthAfter1920 = person.year > 1920;
      const textHasNoDeathMention =
        person.pages && person.pages[0] && person.pages[0].extract
          ? !person.pages[0].extract.toLowerCase().includes(' died ') &&
            !person.pages[0].extract.toLowerCase().includes(' passed away ') &&
            !person.pages[0].extract.toLowerCase().includes(' deceased ') &&
            !person.pages[0].extract.toLowerCase().includes(' suicide ') &&
            !person.pages[0].extract.toLowerCase().includes(' killed ')
          : true;

      const tensesForText = person.text.includes(' is ') || !person.text.includes(' was ');
      return noDeathInfoAvailable && birthAfter1920 && textHasNoDeathMention && tensesForText;
  });

  const filteredBirthdays = livingPeople.map(person => {
    const name = person.text.split(',')[0]?.split('-')[0] ?? 'Unknown';
    const occupation =
      person.text
        .split(',')[1]
        ?.split('and')[0]
        ?.split('(')[0]
        ?.split(' known as ')[0]
        ?.split('for')[0]
        ?.split(';')[0]
        ?.trim()
        ?.split('of')[0]
        ?.split(' ')[1]
        ?.split('-')[0] || '';

    return {
      birthday: new Date(person.year, month, day),
      name: `${name.split(' ')[0]} ${name.split(' ')[1] || ''}`.trim(),
      pageCount: person.pages?.length ?? 0,
      link: person.pages?.[0]?.content_urls?.desktop?.page,
      occupation: occupation.length > 4 ? occupation : '',
    };
  });

  return filteredBirthdays.sort((a, b) => (b.pageCount ?? 0) - (a.pageCount ?? 0)).slice(0, 5);
}
