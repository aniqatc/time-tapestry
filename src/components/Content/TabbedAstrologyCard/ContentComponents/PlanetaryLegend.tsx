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
    <ul className="mx-auto grid grid-cols-2 gap-x-6 gap-y-2 @[400px]:grid-cols-1 @[520px]:grid-cols-2">
      {planets.map((planet, index) => {
        const Icon: IconType | null = getZodiacIcon(planet.sign);
        return (
          <motion.li
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 + index * 0.1 }}
            key={planet.name}
            className={`flex items-center gap-2 ${index === planets.length - 1 ? 'col-span-full mx-auto @[400px]:mx-0 @[520px]:mx-auto' : ''}`}
          >
            {Icon && (
              <span style={{ backgroundColor: planet.color }} className="rounded-full p-1">
                <Icon size={16} className="text-primary-25" />
              </span>
            )}
            <span>
              <p className="text-base">{planet.name}</p>
              <p className="text-xs">
                {planet.sign} <span className="text-xs font-semibold">{planet.degree}°</span>
              </p>
            </span>
          </motion.li>
        );
      })}
    </ul>
  );
}
