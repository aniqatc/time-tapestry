// Purpose: Maps Moon phases to their illustration assets.
import FirstQuarter from '../assets/moon-phases/first-quarter.svg';
import FullMoon from '../assets/moon-phases/full-moon.svg';
import LastQuarter from '../assets/moon-phases/last-quarter.svg';
import NewMoon from '../assets/moon-phases/new-moon.svg';
import WaxingGibbous from '../assets/moon-phases/waxing-gibbous.svg';
import WaxingCrescent from '../assets/moon-phases/waxing-crescent.svg';
import WaningGibbous from '../assets/moon-phases/waning-gibbous.svg';
import WaningCrescrent from '../assets/moon-phases/waning-crescent.svg';

export const MOON_PHASES = {
  'first-quarter': FirstQuarter,
  'full-moon': FullMoon,
  'last-quarter': LastQuarter,
  'new-moon': NewMoon,
  'waxing-gibbous': WaxingGibbous,
  'waxing-crescent': WaxingCrescent,
  'waning-gibbous': WaningGibbous,
  'waning-crescent': WaningCrescrent,
} as const;

export type MoonPhaseKey = keyof typeof MOON_PHASES;
