import { motion } from 'framer-motion';
import { PlanetaryPositionData } from '../../../../types';
import { getZodiacIcon } from '../../../../utils';
import { IconType } from 'react-icons';

interface PlanetaryLegendProps {
  planets: PlanetaryPositionData[];
}

export default function PlanetaryLegend({ ...props }: PlanetaryLegendProps): JSX.Element {
  const { planets } = props;

  return (
    <ul className="">
      {planets.map(planet => {
        const Icon: IconType | null = getZodiacIcon(planet.sign);
        return (
          <li key={planet.name} className="flex items-center gap-1">
            {Icon && (
              <span style={{ backgroundColor: planet.color }} className="rounded-full p-1">
                <Icon size={14} className="text-primary-25" />
              </span>
            )}
            <p className="text-[1.05rem]">{planet.name}</p>
            <p className="text-sm">{planet.sign}</p>
            <p className="text-xs">{planet.degree}°</p>
          </li>
        );
      })}
    </ul>
  );
}
