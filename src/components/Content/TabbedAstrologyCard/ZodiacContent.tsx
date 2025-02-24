import { SecondaryCard, InnerHeading, LinedListItem } from '../../reusable';
import { Heart } from '@phosphor-icons/react';
import { ZODIAC_CONTENT } from '../../../data/dummy';

export default function ZodiacContent(): JSX.Element {
  return (
    <>
      <InnerHeading title={ZODIAC_CONTENT.name} />
      <div className="text-primary-500 @container flex flex-wrap items-center justify-between gap-1 *:capitalize lg:flex-nowrap lg:gap-4">
        <ul className="my-2 flex w-full flex-col gap-2 *:text-nowrap">
          {ZODIAC_CONTENT.content.map(item => (
            <LinedListItem label={item.label} Icon={item.icon} key={crypto.randomUUID()}>
              {item.value}
            </LinedListItem>
          ))}
          <li className="@container flex items-center justify-between gap-2">
            <span className="flex items-center gap-1 text-sm font-semibold @max-xs:self-start">
              <Heart size={14} weight="duotone" className="text-red-400" />
              Compatible
            </span>
            <span className="bg-primary-300/50 hidden h-[1px] w-full @xs:block"></span>
            <ul className="flex flex-col items-end gap-1.5 *:w-min @max-xs:flex-col @xs:flex-row @xs:items-center">
              {ZODIAC_CONTENT.compatible.map(item => (
                <li
                  key={crypto.randomUUID()}
                  className="bg-primary-150 text-primary-500 rounded-xs px-2 py-0.5 text-[12px]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </li>
        </ul>
        <SecondaryCard className="w-full text-xs lg:w-auto">
          <h4 className="font-semibold">Chinese Zodiac</h4>
          <ul className="min-w-36 *:text-nowrap">
            {ZODIAC_CONTENT.chinese.map(item => (
              <li
                key={crypto.randomUUID()}
                className="mt-2 flex items-center justify-between gap-2"
              >
                <span className="font-medium">{item.label}</span>
                <span className="bg-primary-200/85 h-[1px] w-full"></span>
                <span className="text-primary-400">{item.value}</span>
              </li>
            ))}
          </ul>
        </SecondaryCard>
      </div>
    </>
  );
}
