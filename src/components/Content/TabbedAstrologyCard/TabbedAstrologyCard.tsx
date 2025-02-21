import { useState } from 'react';
import { PrimaryCard } from '../../../components/reusable';
import { Planet, MoonStars, Star, Flag } from '@phosphor-icons/react';
import TabButton from './TabButton';

export default function TabbedAstrologyCard(): JSX.Element {
  const [active, setActive] = useState<number>(0);

  const tabs = [
    { label: 'Planets', Icon: Planet, content: 'Planetary alignment data will appear here...' },
    { label: 'Moon', Icon: MoonStars, content: 'Moon phase data will appear here...' },
    { label: 'Zodiac', Icon: Star, content: 'Zodiac/horoscope info will appear here...' },
    { label: 'Events', Icon: Flag, content: 'Astrological events will appear here...' },
  ];

  return (
    <>
      <div className="absolute top-2 flex gap-0 text-sm md:pl-3 lg:gap-2">
        {tabs.map((tab, index) => (
          <TabButton
            index={index}
            isActive={active === index}
            setActive={setActive}
            Icon={tab.Icon}
            key={tab.label}
          >
            {tab.label}
          </TabButton>
        ))}
      </div>
      <div className="relative top-9 z-10 lg:top-0">
        {tabs.map(
          (tab, index) =>
            active === index && <PrimaryCard key={tab.label}>{tab.content}</PrimaryCard>
        )}
      </div>
    </>
  );
}
