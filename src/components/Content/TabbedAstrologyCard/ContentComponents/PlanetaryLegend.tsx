import { Dispatch, SetStateAction } from 'react';
import { motion } from 'framer-motion';
import { PlanetaryPositionData } from '../../../../types';
import { getZodiacIcon } from '../../../../utils';
import { IconType } from 'react-icons';

interface PlanetaryLegendProps {
  planets: PlanetaryPositionData[];
  hoveredPlanet: string;
  setHoveredPlanet: Dispatch<SetStateAction<string>>;
}

export default function PlanetaryLegend({ ...props }: PlanetaryLegendProps): JSX.Element {
  const { hoveredPlanet, planets, setHoveredPlanet } = props;

  return (
    <ul className="mx-auto grid grid-cols-2 gap-x-6 gap-y-2 @[400px]:grid-cols-1 @[520px]:grid-cols-2">
      {planets.map((planet, index) => {
        const Icon: IconType | null = getZodiacIcon(planet.sign);
        return (
          <motion.li
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 + index * 0.1 }}
            className={`flex items-center gap-2 ${index === planets.length - 1 ? 'col-span-full mx-auto @[400px]:mx-0 @[520px]:mx-auto' : ''}`}
            key={planet.name}
            onHoverStart={() => setHoveredPlanet(planet.name)}
            onHoverEnd={() => setHoveredPlanet('')}
            onTouchStart={() => setHoveredPlanet(planet.name)}
            onTouchEnd={() => setHoveredPlanet('')}
          >
            {Icon && (
              <span
                style={{ backgroundColor: planet.color }}
                className={`rounded-full p-1 ${hoveredPlanet === planet.name ? 'scale-110 shadow-md' : 'scale-100'}`}
              >
                <Icon
                  size={16}
                  className={`text-primary-25 ${hoveredPlanet === planet.name ? 'scale-110' : 'scale-100'}`}
                />
              </span>
            )}
            <span className={hoveredPlanet === planet.name ? 'text-primary-800' : 'text-primary-500'}>
              <p className={`text-base leading-5 ${hoveredPlanet === planet.name ? 'font-semibold' : 'font-normal'}`}>
                {planet.name}
              </p>
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
