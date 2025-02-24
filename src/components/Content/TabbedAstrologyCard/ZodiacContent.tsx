import { SecondaryCard, InnerHeading, LinedListItem } from '../../reusable';
import { Atom, Planet, Scales, Heart } from '@phosphor-icons/react';

const ZODIAC_ITEMS = {
  zodiac: 'Virgo',
  element: 'Earth',
  quality: 'mutable',
  rulingPlanet: 'mercury',
  compatible: ['taurus', 'cancer', 'capricorn'],
  chinese: {
    animal: 'ox',
    element: 'metal',
    yinYang: 'yin',
  },
};

export default function ZodiacContent(): JSX.Element {
  return (
    <>
      <InnerHeading title={ZODIAC_ITEMS.zodiac} />
      <div className="text-primary-500 @container flex flex-wrap items-center justify-between gap-1 lg:flex-nowrap lg:gap-4">
        <ul className="my-2 flex w-full flex-col gap-2 capitalize *:text-nowrap">
          <LinedListItem label="Element" Icon={Atom}>
            Earth
          </LinedListItem>
          <LinedListItem label="Ruling Planet" Icon={Planet}>
            Mercury
          </LinedListItem>
          <LinedListItem label="Quality" Icon={Scales}>
            Mutable
          </LinedListItem>
          <li className="@container flex items-center justify-between gap-2">
            <span className="flex items-center gap-1 text-sm font-semibold @max-xs:self-start">
              <Heart size={14} weight="duotone" className="text-red-400" />
              Compatible
            </span>
            <span className="bg-primary-300/50 hidden h-[1px] w-full @xs:block"></span>
            <ul className="flex flex-col items-end gap-1.5 *:w-min @max-xs:flex-col @xs:flex-row @xs:items-center">
              <li className="bg-primary-150 text-primary-500 rounded-xs px-2 py-0.5 text-[12px]">
                Taurus
              </li>
              <li className="bg-primary-150 text-primary-500 rounded-xs px-2 py-0.5 text-[12px]">
                Cancer
              </li>
              <li className="bg-primary-150 text-primary-500 rounded-xs px-2 py-0.5 text-[12px]">
                Capricorn
              </li>
            </ul>
          </li>
        </ul>
        <SecondaryCard className="w-full text-xs lg:w-auto">
          <h4 className="font-semibold">Chinese Zodiac</h4>
          <ul className="min-w-36 capitalize *:text-nowrap">
            <li className="mt-2 flex items-center justify-between gap-2">
              <span className="font-medium">Animal</span>
              <span className="bg-primary-200/85 h-[1px] w-full"></span>
              <span className="text-primary-400">Ox</span>
            </li>
            <li className="mt-2 flex items-center justify-between gap-2">
              <span className="font-medium">Element</span>
              <span className="bg-primary-200/85 h-[1px] w-full"></span>
              <span className="text-primary-400">Metal</span>
            </li>
            <li className="mt-2 flex items-center justify-between gap-2">
              <span className="font-medium">Yin/Yang</span>
              <span className="bg-primary-200/85 h-[1px] w-full"></span>
              <span className="text-primary-400">Yin</span>
            </li>
          </ul>
        </SecondaryCard>
      </div>
    </>
  );
}
