import { motion } from 'framer-motion';
import { LinedListItem } from '../../reusable';
import { MOON_PHASES, MoonPhaseKey } from '../../../constants';
import { MOON_CONTENT } from '../../../data/dummy';
import { useDateStore } from '../../../contexts';

export default function MoonContent(): JSX.Element {
  const formattedDate = useDateStore((state: { formattedDate: string }) => state.formattedDate);

  return (
    <div className="@container p-2 *:capitalize">
      <p className="text-primary-400 -mt-1 text-end text-xs">Detected Location: New York, NY</p>
      <div className="-mt-1 flex flex-nowrap items-center justify-between gap-4 @max-xs:mt-2 @max-xs:flex-col @max-xs:gap-2">
        <figure className="flex flex-col gap-2 px-5 py-2">
          <motion.img
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2, type: 'spring', stiffness: 100 }}
            src={MOON_PHASES[MOON_CONTENT.name.replace(' ', '-').toLowerCase() as MoonPhaseKey]}
            alt={`Illustration of the moon phase ${MOON_CONTENT.name} for ${formattedDate}`}
            className="h-24"
          />
          <figcaption className="text-primary-400 text-xs font-medium text-nowrap">
            {MOON_CONTENT.name}
          </figcaption>
        </figure>
        <ul className="mt-3 flex w-full flex-col gap-2 *:text-nowrap @max-xs:mt-0">
          {MOON_CONTENT.content.map(item => (
            <LinedListItem label={item.label} Icon={item.icon} key={crypto.randomUUID()}>
              {item.value}
            </LinedListItem>
          ))}
        </ul>
      </div>
    </div>
  );
}
