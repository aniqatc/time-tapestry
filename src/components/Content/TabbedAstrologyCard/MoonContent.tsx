import { motion } from 'framer-motion';
import { LinedListItem } from '../../reusable';
import { MOON_PHASES, MoonPhaseKey } from '../../../constants';
import { useDateStore } from '../../../contexts';
import { getMoonDetails } from '../../../utils/astrology';

export default function MoonContent(): JSX.Element {
  const formattedDate = useDateStore((state: { formattedDate: string }) => state.formattedDate);
  const selectedDate = useDateStore(state => state.selectedDate);
  const moon = getMoonDetails(selectedDate);

  return (
    <div className="@container p-2 *:capitalize">
      <p className="text-primary-400 -mt-1 text-end text-xs">Rise and set times · New York, NY</p>
      <div className="-mt-1 flex flex-nowrap items-center justify-between gap-4 @max-xs:mt-2 @max-xs:flex-col @max-xs:gap-2">
        <figure className="flex flex-col gap-2 px-5 py-2">
          <motion.img
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2, type: 'spring', stiffness: 100 }}
            src={MOON_PHASES[moon.name.replaceAll(' ', '-').toLowerCase() as MoonPhaseKey]}
            alt={`Illustration of the moon phase ${moon.name} for ${formattedDate}`}
            className="h-24"
          />
          <figcaption className="text-primary-400 text-xs font-medium text-nowrap">
            {moon.name}
          </figcaption>
        </figure>
        <ul className="mt-3 flex w-full flex-col gap-2 *:text-nowrap @max-xs:mt-0">
          {moon.items.map(item => (
            <LinedListItem label={item.label} key={item.label}>
              {item.value}
            </LinedListItem>
          ))}
        </ul>
      </div>
    </div>
  );
}
