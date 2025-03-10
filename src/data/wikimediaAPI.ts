import { NotableEvent } from '../types';
import { FamousBirthday } from '../types';

const API_URL = 'https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday';

export async function fetchEventsFromWikimedia(day: number, month: number): Promise<NotableEvent[]> {
  try {
    const url = `${API_URL}/events/${day}/${month + 1}`;
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

export async function fetchBirthdaysFromWikimedia(day: number, month: number): Promise<FamousBirthday[]> {
  try {
    const url = `${API_URL}/births/${day}/${month + 1}`;
    const response = await fetch(url);
    const data = await response.json();

    const livingPeople = data.births.filter(person => {
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
      const name = person.text.split(',')[0]?.split('-')[0];
      const occupation =
        person?.text
          .split(',')[1]
          ?.split('and')[0]
          ?.split('(')[0]
          ?.split(' known as ')[0]
          ?.split('for')[0]
          ?.split(';')[0]
          ?.trim()
          ?.split('of')[0]
          ?.split(' ')[1] || '';

      return {
        birthday: new Date(person.year, month, day),
        name: `${name.split(' ')[0]} ${name.split(' ')[1] || ''}`,
        pageCount: person.pages?.length,
        link: person.pages?.[0]?.content_urls?.desktop?.page,
        occupation: occupation.length > 5 ? occupation : '',
      };
    });

    return filteredBirthdays.sort((a, b) => b.pageCount - a.pageCount).slice(0, 5);
  } catch {
    console.log('Error fetching data from the Wikimedia API. Please try again later.');
    return [];
  }
}
