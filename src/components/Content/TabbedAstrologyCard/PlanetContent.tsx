// Purpose: Builds the planetary chart and legend for the selected date.
import { useState } from 'react';
import PlanetaryChart from './ContentComponents/PlanetaryChart';
import PlanetaryLegend from './ContentComponents/PlanetaryLegend';
import { getPlanetPositions, ZODIAC_SIGNS } from '../../../utils/astrology';
import { useDateStore } from '../../../contexts';

export default function PlanetContent(): JSX.Element {
  const [hoveredPlanet, setHoveredPlanet] = useState<string>('');
  const selectedDate = useDateStore(state => state.selectedDate);
  const planets = getPlanetPositions(selectedDate);

  return (
    <div className="@container flex flex-wrap items-center gap-1">
      <PlanetaryChart
        planets={planets}
        zodiacSigns={ZODIAC_SIGNS}
        hoveredPlanet={hoveredPlanet}
        setHoveredPlanet={setHoveredPlanet}
      />
      <PlanetaryLegend
        planets={planets}
        setHoveredPlanet={setHoveredPlanet}
        hoveredPlanet={hoveredPlanet}
      />
    </div>
  );
}
