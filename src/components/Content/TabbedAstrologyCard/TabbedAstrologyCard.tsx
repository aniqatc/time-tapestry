import { useState } from 'react';
import { motion } from 'framer-motion';
import { PrimaryCard } from '@components/reusable';
import { Planet, MoonStars, Star, Flag } from '@phosphor-icons/react';

export default function TabbedAstrologyCard(): JSX.Element {
  const [active, setActive] = useState<number>(0);

  return (
    <>
      <div className="absolute top-2 flex gap-0 text-sm md:pl-3 lg:gap-2">
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.3, delay: 0.2, ease: 'easeIn' },
          }}
          onClick={() => setActive(0)}
          className={`${active === 0 ? 'shadow-primary bg-primary-75 border-primary-100 text-primary-900' : 'text-primary-400 border-primary-25'} hover:text-primary-800 mr-0.5 flex cursor-pointer items-center gap-1 rounded-sm border px-2 py-1 transition-all`}
        >
          <Planet size={14} weight="duotone" />
          <span
            className={`${active === 0 ? 'block' : 'xs:hidden hidden min-[395px]:block min-[720px]:block'}`}
          >
            Planets
          </span>
        </motion.button>
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.3, delay: 0.3, ease: 'easeIn' },
          }}
          onClick={() => setActive(1)}
          className={`${active === 1 ? 'shadow-primary bg-primary-75 border-primary-100 text-primary-900' : 'text-primary-400 border-primary-25'} hover:text-primary-800 mr-0.5 flex cursor-pointer items-center gap-1 rounded-sm border px-2 py-1 transition-all`}
        >
          <MoonStars size={14} weight="duotone" />
          <span
            className={`${active === 1 ? 'block' : 'xs:hidden hidden min-[395px]:block min-[720px]:block'}`}
          >
            Moon
          </span>
        </motion.button>
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.3, delay: 0.4, ease: 'easeIn' },
          }}
          onClick={() => setActive(2)}
          className={`${active === 2 ? 'shadow-primary bg-primary-75 border-primary-100 text-primary-900' : 'text-primary-400 border-primary-25'} hover:text-primary-800 mr-0.5 flex cursor-pointer items-center gap-1 rounded-sm border px-2 py-1 transition-all`}
        >
          <Star size={14} weight="duotone" />
          <span
            className={`${active === 2 ? 'block' : 'xs:hidden hidden min-[395px]:block min-[720px]:block'}`}
          >
            Zodiac
          </span>
        </motion.button>
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.3, delay: 0.5, ease: 'easeIn' },
          }}
          onClick={() => setActive(3)}
          className={`${active === 3 ? 'shadow-primary bg-primary-75 border-primary-100 text-primary-900' : 'text-primary-400 border-primary-25'} hover:text-primary-800 mr-0.5 flex cursor-pointer items-center gap-1 rounded-sm border px-2 py-1 transition-all`}
        >
          <Flag size={14} weight="duotone" />
          <span
            className={`${active === 3 ? 'block' : 'xs:hidden hidden min-[395px]:block min-[720px]:block'}`}
          >
            Events
          </span>
        </motion.button>
      </div>
      <div className="relative top-9 z-10 lg:top-0">
        {active === 0 && <PrimaryCard>Planets</PrimaryCard>}
        {active === 1 && <PrimaryCard>Moon</PrimaryCard>}
        {active === 2 && <PrimaryCard>Zodiac</PrimaryCard>}
        {active === 3 && <PrimaryCard>Events</PrimaryCard>}
      </div>
    </>
  );
}
