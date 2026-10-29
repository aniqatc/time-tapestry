import {
  Body,
  EclipseKind,
  Ecliptic,
  GeoVector,
  Illumination,
  MoonPhase,
  NextMoonQuarter,
  Observer,
  SearchGlobalSolarEclipse,
  SearchLunarEclipse,
  SearchMoonQuarter,
  SearchRiseSet,
  SunPosition,
} from 'astronomy-engine';
import { PlanetaryPositionData } from '../types';

export const ZODIAC_SIGNS = [
  'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
  'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces',
];

const PLANETS: { body: Body; name: string; color: string; magnitude: number }[] = [
  { body: Body.Sun, name: 'Sun', color: '#bcb245', magnitude: -26.77 },
  { body: Body.Moon, name: 'Moon', color: '#2670D2', magnitude: -9.45 },
  { body: Body.Mercury, name: 'Mercury', color: '#46B277', magnitude: -1.31 },
  { body: Body.Venus, name: 'Venus', color: '#D77BD7', magnitude: -3.87 },
  { body: Body.Mars, name: 'Mars', color: '#B50928', magnitude: -0.54 },
  { body: Body.Jupiter, name: 'Jupiter', color: '#7450E2', magnitude: -1.97 },
  { body: Body.Saturn, name: 'Saturn', color: '#C16718', magnitude: 0.51 },
];

export const dateAtUtcNoon = (date: Date): Date =>
  new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), 12));

export const zodiacAtLongitude = (longitude: number): { sign: string; degree: number } => {
  const normalized = ((longitude % 360) + 360) % 360;
  const signIndex = Math.floor(normalized / 30);
  return { sign: ZODIAC_SIGNS[signIndex], degree: Math.floor(normalized % 30) };
};

const geocentricLongitude = (body: Body, date: Date): number => Ecliptic(GeoVector(body, date, true)).elon;

export const moonPhaseName = (phase: number): string => {
  const names = ['New Moon', 'Waxing Crescent', 'First Quarter', 'Waxing Gibbous', 'Full Moon', 'Waning Gibbous', 'Last Quarter', 'Waning Crescent'];
  return names[Math.floor((((phase + 22.5) % 360) + 360) % 360 / 45)];
};

const clockTime = (date: Date | null): string => date
  ? new Intl.DateTimeFormat(undefined, { hour: 'numeric', minute: '2-digit', timeZone: 'America/New_York' }).format(date)
  : '—';

export function getMoonDetails(date: Date) {
  const at = dateAtUtcNoon(date);
  const phase = MoonPhase(at);
  const illumination = Illumination(Body.Moon, at).phase_fraction;
  const observer = new Observer(40.7128, -74.006, 0);
  const start = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const rise = SearchRiseSet(Body.Moon, observer, 1, start, 1);
  const set = SearchRiseSet(Body.Moon, observer, -1, start, 1);
  const moonSign = zodiacAtLongitude(geocentricLongitude(Body.Moon, at)).sign;
  const name = moonPhaseName(phase);
  return {
    name,
    items: [
      { label: 'Phase', value: name },
      { label: 'Illumination', value: `${Math.round(illumination * 100)}%` },
      { label: 'Moon sign', value: moonSign },
      { label: 'Moonrise', value: clockTime(rise?.date ?? null) },
      { label: 'Moonset', value: clockTime(set?.date ?? null) },
    ],
  };
}

export function getPlanetPositions(date: Date): PlanetaryPositionData[] {
  const at = dateAtUtcNoon(date);
  return PLANETS.map(planet => ({
    name: planet.name,
    ...zodiacAtLongitude(planet.body === Body.Sun ? SunPosition(at).elon : geocentricLongitude(planet.body, at)),
    color: planet.color,
    magnitude: planet.magnitude,
  }));
}

const PHASE_NAMES = ['New Moon', 'First Quarter', 'Full Moon', 'Last Quarter'];

export interface AstronomyEvent {
  title: string;
  date: Date;
  description: string;
}

export function getAstronomyEvents(date: Date): AstronomyEvent[] {
  const start = dateAtUtcNoon(date);
  const events: AstronomyEvent[] = [];
  let quarter = SearchMoonQuarter(start);
  for (let i = 0; i < 2; i += 1) {
    const when = quarter.time.date;
    if (when.getTime() - start.getTime() <= 35 * 86400000) {
      const phaseName = PHASE_NAMES[quarter.quarter];
      events.push({ title: phaseName, date: when, description: `The Moon reaches its ${phaseName.toLowerCase()} phase.` });
    }
    quarter = NextMoonQuarter(quarter);
  }

  const eclipse = SearchLunarEclipse(start);
  const eclipseDate = eclipse.peak.date;
  if (eclipseDate.getTime() - start.getTime() <= 180 * 86400000) {
    const kind = eclipse.kind === EclipseKind.Total ? 'Total' : eclipse.kind === EclipseKind.Partial ? 'Partial' : 'Penumbral';
    events.push({ title: `${kind} Lunar Eclipse`, date: eclipseDate, description: 'Lunar eclipse visible from parts of Earth' });
  }
  const solarEclipse = SearchGlobalSolarEclipse(start);
  const solarDate = solarEclipse.peak.date;
  if (solarDate.getTime() - start.getTime() <= 180 * 86400000) {
    const kind = solarEclipse.kind === EclipseKind.Total ? 'Total' : solarEclipse.kind === EclipseKind.Annular ? 'Annular' : 'Partial';
    events.push({ title: `${kind} Solar Eclipse`, date: solarDate, description: 'Solar eclipse visible from parts of Earth' });
  }
  return events.sort((a, b) => a.date.getTime() - b.date.getTime()).slice(0, 4);
}

export const formatEventDate = (date: Date): string => new Intl.DateTimeFormat(undefined, {
  month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit', timeZoneName: 'short',
}).format(date);
