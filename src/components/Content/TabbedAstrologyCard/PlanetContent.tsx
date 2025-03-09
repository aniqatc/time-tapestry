import { useState } from 'react';
import PlanetaryChart from './ContentComponents/PlanetaryChart';
import PlanetaryLegend from './ContentComponents/PlanetaryLegend';
import { PLANET_POSITIONS, ZODIAC_SIGNS } from '../../../data/dummy';

export default function PlanetContent(): JSX.Element {
  const [hoveredPlanet, setHoveredPlanet] = useState<string>('');

  return (
    <div className="@container flex flex-wrap items-center gap-1">
      <PlanetaryChart
        planets={PLANET_POSITIONS}
        zodiacSigns={ZODIAC_SIGNS}
        hoveredPlanet={hoveredPlanet}
        setHoveredPlanet={setHoveredPlanet}
      />
      <PlanetaryLegend
        planets={PLANET_POSITIONS}
        setHoveredPlanet={setHoveredPlanet}
        hoveredPlanet={hoveredPlanet}
      />
    </div>
  );
}
