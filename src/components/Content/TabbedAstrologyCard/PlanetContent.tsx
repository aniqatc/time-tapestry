import PlanetaryChart from './ContentComponents/PlanetaryChart';
import PlanetaryLegend from './ContentComponents/PlanetaryLegend';
import { PLANET_POSITIONS, ZODIAC_SIGNS } from '../../../data/dummy';

export default function PlanetContent(): JSX.Element {
  return (
    <div className="flex items-center gap-1">
      <PlanetaryChart planets={PLANET_POSITIONS} zodiacSigns={ZODIAC_SIGNS} />
      <PlanetaryLegend planets={PLANET_POSITIONS} zodiacSigns={ZODIAC_SIGNS} />
    </div>
  );
}
