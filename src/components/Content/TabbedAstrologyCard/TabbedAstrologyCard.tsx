import { useState } from 'react';
import { PrimaryCard } from '../../../components/reusable';
import { TABS } from '../../../constants';
import TabButton from './TabButton';

export default function TabbedAstrologyCard(): JSX.Element {
  const [active, setActive] = useState<number>(0);

  return (
    <>
      <div className="absolute top-2 flex gap-0 text-sm md:pl-3 lg:gap-2">
        {TABS.map((tab, index) => (
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
        {TABS.map(
          (tab, index) =>
            active === index && <PrimaryCard key={tab.label}>{tab.content}</PrimaryCard>
        )}
      </div>
    </>
  );
}
