import { MoonData, ZodiacData, PlanetaryPositionData } from '../types';
import {
  Eye,
  Asterisk,
  Atom,
  Planet,
  Scales,
} from '@phosphor-icons/react';

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
// Zodiac signs in order
export const ZODIAC_SIGNS: string[] = [
  'Aries',
  'Taurus',
  'Gemini',
  'Cancer',
  'Leo',
  'Virgo',
  'Libra',
  'Scorpio',
  'Sagittarius',
  'Capricorn',
  'Aquarius',
  'Pisces',
];

// Hardcoded planet data based on API response
// (from https://docs.astronomyapi.com/endpoints/bodies/positions)
export const PLANET_POSITIONS: PlanetaryPositionData[] = [
  {
    name: 'Sun',
    sign: 'Sagittarius',
    degree: 15,
    color: '#bcb245',
    magnitude: -26.77,
  },
  {
    name: 'Moon',
    sign: 'Aquarius',
    degree: 10,
    color: '#2670D2',
    magnitude: -9.45,
  },
  {
    name: 'Mercury',
    sign: 'Sagittarius',
    degree: 20,
    color: '#46B277',
    magnitude: -1.31,
  },
  {
    name: 'Venus',
    sign: 'Scorpio',
    degree: 15,
    color: '#D77BD7',
    magnitude: -3.87,
  },
  {
    name: 'Mars',
    sign: 'Pisces',
    degree: 5,
    color: '#B50928',
    magnitude: -0.54,
  },
  {
    name: 'Jupiter',
    sign: 'Capricorn',
    degree: 10,
    color: '#7450E2',
    magnitude: -1.97,
  },
  {
    name: 'Saturn',
    sign: 'Capricorn',
    degree: 15,
    color: '#C16718',
    magnitude: 0.51,
  },
];
