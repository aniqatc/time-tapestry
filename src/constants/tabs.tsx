// Purpose: Defines the labels, icons, and content for astrology tabs.
import React from 'react';
import { Icon, Planet, MoonStars, Star, Flag } from '@phosphor-icons/react';
import PlanetContent from '../components/Content/TabbedAstrologyCard/PlanetContent';
import MoonContent from '../components/Content/TabbedAstrologyCard/MoonContent';
import ZodiacContent from '../components/Content/TabbedAstrologyCard/ZodiacContent';
import AstronomyEventContent from '../components/Content/TabbedAstrologyCard/AstronomyEventContent';

interface AstrologyTab {
  label: string;
  Icon: Icon;
  content: React.ReactNode;
}

export const TABS: AstrologyTab[] = [
  { label: 'Moon', Icon: MoonStars, content: <MoonContent /> },
  { label: 'Planets', Icon: Planet, content: <PlanetContent /> },
  { label: 'Zodiac', Icon: Star, content: <ZodiacContent /> },
  { label: 'Events', Icon: Flag, content: <AstronomyEventContent /> },
];
