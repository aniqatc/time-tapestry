import dayjs from 'dayjs';
import {
  UserBirthday,
  FamousBirthday,
  RecurringEvent,
  NotableEvent,
  MoonData,
  ZodiacData,
} from '../types';
import { Eye, Asterisk, Atom, Planet, Scales } from '@phosphor-icons/react';

export const VERIFIED_USERS: UserBirthday[] = [
  {
    name: 'aniqatc',
    birthday: dayjs().subtract(20, 'year').toDate(),
    link: 'https://aniqa.dev',
    relation: 'Self (Female)',
  },
  {
    name: 'timothy',
    birthday: dayjs().subtract(11, 'year').toDate(),
    relation: 'Sister',
  },
  {
    name: 'johndoe',
    birthday: dayjs().subtract(58, 'year').toDate(),
    link: 'https://bsky.app',
    relation: 'Self (Male)',
  },
  {
    name: 'cooldude',
    birthday: dayjs().subtract(48, 'year').toDate(),
    link: 'https://twitter.com/cooldude',
    relation: 'Self (Male)',
  },
  {
    name: 'johndoe',
    birthday: dayjs().subtract(58, 'year').toDate(),
    relation: 'Wife',
  },
  {
    name: 'janedoe',
    birthday: dayjs().subtract(25, 'year').toDate(),
    relation: 'Husband',
  },
];

export const FAMOUS_USERS: FamousBirthday[] = [
  {
    name: 'Super Man',
    birthday: dayjs().subtract(20, 'year').toDate(),
    link: '/',
    occupation: 'Superhero',
  },
  {
    name: 'Iron Man',
    birthday: dayjs().subtract(11, 'year').toDate(),
  },
  {
    name: 'Tony Stark',
    birthday: dayjs().subtract(58, 'year').toDate(),
    link: 'https://tonystark.com',
    occupation: 'Businessman',
  },
  {
    name: 'Donald Trump',
    birthday: dayjs().subtract(48, 'year').toDate(),
    link: 'https://twitter.com/trump',
    occupation: 'President',
  },
  {
    name: 'King Kong',
    birthday: dayjs().subtract(58, 'year').toDate(),
  },
  {
    name: 'Black Widow',
    birthday: dayjs().subtract(25, 'year').toDate(),
    occupation: 'Superhero',
  },
];

export const siteEvents: RecurringEvent[] = [
  {
    month: 9,
    day: 10,
    year: 2024,
  },
  {
    month: 1,
    day: 27,
    year: 2023,
  },
  {
    month: 1,
    day: 18,
    year: 2000,
  },
];

export const userEvents: RecurringEvent[] = [
  {
    month: new Date().getMonth(),
    day: new Date().getDate(),
    year: new Date().getFullYear(),
  },
  {
    month: 9,
    day: 10,
    year: 2024,
  },
];

export const notableEvents: NotableEvent[] = [
  {
    year: 1992,
    source: '#',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    year: 2010,
    source: '#',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    year: 2000,
    source: '#',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

export const MOON_CONTENT: MoonData = {
  name: 'Waxing Gibbous',
  content: [
    {
      label: 'Phase',
      value: 'Waxing Gibbous',
    },
    {
      label: 'Visibility',
      value: '92%',
      icon: Eye,
    },
    {
      label: 'Sign',
      value: 'Gemini',
      icon: Asterisk,
    },
    {
      label: 'Rising',
      value: '15:42',
    },
    {
      label: 'Setting',
      value: '03:20',
    },
  ],
};

export const ZODIAC_CONTENT: ZodiacData = {
  name: 'Virgo',
  compatible: ['taurus', 'cancer', 'capricorn'],
  chinese: [
    {
      label: 'Animal',
      value: 'ox',
    },
    {
      label: 'Element',
      value: 'metal',
    },
    {
      label: 'Yin/Yang',
      value: 'Yin',
    },
  ],
  content: [
    {
      label: 'Element',
      value: 'earth',
      icon: Atom,
    },
    {
      label: 'quality',
      value: 'mutable',
      icon: Scales,
    },
    {
      label: 'ruling planet',
      value: 'mercury',
      icon: Planet,
    },
  ],
};
