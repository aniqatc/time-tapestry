import { useState } from 'react';
import { motion } from 'framer-motion';
import { PrimaryCard, Label } from '@components/reusable';
import { useDateStore } from '@contexts';
import { ArrowUpRight, Planet, MoonStars, Star, Flag } from '@phosphor-icons/react';

export default function Content(): JSX.Element {
  const shortFormattedDate = useDateStore(
    (state: { shortFormattedDate: string }) => state.shortFormattedDate
  );
  const [active, setActive] = useState<number>(0);

  return (
    <div className="max-xs:pl-16 -mt-9 flex w-full flex-col gap-4 overflow-y-auto pr-3 pb-28 pl-2 max-[650px]:-mt-2 lg:ml-[350px] lg:max-w-[655px] xl:mx-auto">
      <section className="flex flex-wrap gap-3 lg:flex-nowrap">
        <PrimaryCard heading={`Birthdays on ${shortFormattedDate}`}>
          <Label className="mb-2">Notable Persons</Label>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </PrimaryCard>
        <PrimaryCard>
          <Label className="mb-2">User Birthdays</Label>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </PrimaryCard>
      </section>
      <section>
        <PrimaryCard heading={`Notable Events on ${shortFormattedDate}`}>
          <ul className="flex flex-col gap-2">
            <li>
              <a
                href="#"
                className="group hover:bg-primary-50/45 active:bg-primary-50/45 -mx-2 -my-1 flex items-start justify-between gap-2 rounded-xs px-2 py-1 *:transition-all *:duration-200"
              >
                <Label
                  className="group-hover:text-primary-500 group-active:text-primary-500"
                  number="true"
                >
                  1290
                </Label>
                <span className="group-hover:text-primary-700 group-active:text-primary-700 mr-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </span>
                <ArrowUpRight
                  size={20}
                  className="text-primary-30 group-active:text-primary-800 group-hover:text-primary-800 mt-1 ml-2 shrink-0 group-hover:rotate-45 group-active:rotate-45"
                />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="group hover:bg-primary-50/45 active:bg-primary-50/45 -mx-2 -my-1 flex items-start justify-between gap-2 rounded-xs px-2 py-1 *:transition-all *:duration-200"
              >
                <Label
                  className="group-hover:text-primary-500 group-active:text-primary-500"
                  number="true"
                >
                  1290
                </Label>
                <span className="group-hover:text-primary-700 group-active:text-primary-700 mr-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </span>
                <ArrowUpRight
                  size={20}
                  className="text-primary-30 group-active:text-primary-800 group-hover:text-primary-800 mt-1 ml-2 shrink-0 group-hover:rotate-45 group-active:rotate-45"
                />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="group hover:bg-primary-50/45 active:bg-primary-50/45 -mx-2 -my-1 flex items-start justify-between gap-2 rounded-xs px-2 py-1 *:transition-all *:duration-200"
              >
                <Label
                  className="group-hover:text-primary-500 group-active:text-primary-500"
                  number="true"
                >
                  1290
                </Label>
                <span className="group-hover:text-primary-700 group-active:text-primary-700 mr-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </span>
                <ArrowUpRight
                  size={20}
                  className="text-primary-30 group-active:text-primary-800 group-hover:text-primary-800 mt-1 ml-2 shrink-0 group-hover:rotate-45 group-active:rotate-45"
                />
              </a>
            </li>
          </ul>
        </PrimaryCard>
      </section>
      <section className="relative">
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
      </section>
      <section className="mt-9 lg:mt-0">
        <PrimaryCard heading="On This Site"></PrimaryCard>
      </section>
    </div>
  );
}
