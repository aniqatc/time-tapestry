import { NotableEvent } from '../types';

export async function fetchEventsFromWikimedia(day: number, month: number): Promise<NotableEvent[]> {
  try {
    const url = `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/events/${day}/${month + 1}`;
    const response = await fetch(url);
    const data = await response.json();

    const filteredEvents = data.events.map(event => ({
      day,
      month,
      year: event.year,
      description: event.text,
      source: event.pages?.[0]?.content_urls?.desktop?.page,
      pageCount: event.pages?.length,
    }));

    return filteredEvents.sort((a, b) => b.pageCount - a.pageCount).slice(0, 3);
  } catch {
    console.log('Error fetching data from the Wikimedia API. Please try again later.');
    return [];
  }
}
