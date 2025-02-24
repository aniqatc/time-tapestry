import { SecondaryCard, InnerHeading } from '../../reusable';

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
      <div className="text-primary-500 flex flex-wrap items-center justify-between gap-2 lg:flex-nowrap lg:gap-4">
        <ul className="flex w-full flex-col gap-1 capitalize *:text-nowrap">
          <li className="mt-2 flex items-center gap-2">
            <span className="text-sm font-medium">Element</span>
            <span className="bg-primary-300/50 h-[1px] w-full"></span>
            <span className="text-primary-400">Earth</span>
          </li>
          <li className="mt-2 flex items-center gap-2">
            <span className="text-sm font-medium">Quality</span>
            <span className="bg-primary-300/50 h-[1px] w-full"></span>
            <span className="text-primary-400">Mutable</span>
          </li>
          <li className="mt-2 flex items-center gap-2">
            <span className="text-sm font-medium">Ruling Planet</span>
            <span className="bg-primary-300/50 h-[1px] w-full"></span>
            <span className="text-primary-400">Mercury</span>
          </li>
          <li className="@container mt-2 flex items-center justify-between gap-2">
            <span className="block text-sm font-medium @max-xs:self-start">Compatible Signs</span>
            <span className="bg-primary-300/50 hidden h-[1px] w-full @xs:block"></span>
            <ul className="flex flex-col items-end gap-1.5 *:w-min @max-xs:flex-col @xs:flex-row @xs:items-center">
              <li className="bg-primary-150 text-primary-400 rounded-xs px-2 py-0.5 text-[12px]">
                Taurus
              </li>
              <li className="bg-primary-150 text-primary-400 rounded-xs px-2 py-0.5 text-[12px]">
                Cancer
              </li>
              <li className="bg-primary-150 text-primary-400 rounded-xs px-2 py-0.5 text-[12px]">
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
              <span className="bg-primary-200/75 h-[1px] w-full"></span>
              <span className="text-primary-400">Ox</span>
            </li>
            <li className="mt-2 flex items-center justify-between gap-2">
              <span className="font-medium">Element</span>
              <span className="bg-primary-200/75 h-[1px] w-full"></span>
              <span className="text-primary-400">Metal</span>
            </li>
            <li className="mt-2 flex items-center justify-between gap-2">
              <span className="font-medium">Yin/Yang</span>
              <span className="bg-primary-200/75 h-[1px] w-full"></span>
              <span className="text-primary-400">Yin</span>
            </li>
          </ul>
        </SecondaryCard>
      </div>
    </>
  );
}
