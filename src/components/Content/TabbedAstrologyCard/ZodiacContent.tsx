import { Atom, Heart, Planet, Scales } from '@phosphor-icons/react';
import { InnerHeading, LinedListItem, SecondaryCard } from '../../reusable';
import { useDateStore } from '../../../contexts';
import { getPlanetPositions } from '../../../utils/astrology';

const SIGN_DETAILS: Record<string, { element: string; quality: string; ruler: string; compatible: string[] }> = {
  Aries: { element: 'Fire', quality: 'Cardinal', ruler: 'Mars', compatible: ['Leo', 'Sagittarius', 'Gemini'] },
  Taurus: { element: 'Earth', quality: 'Fixed', ruler: 'Venus', compatible: ['Virgo', 'Capricorn', 'Cancer'] },
  Gemini: { element: 'Air', quality: 'Mutable', ruler: 'Mercury', compatible: ['Libra', 'Aquarius', 'Aries'] },
  Cancer: { element: 'Water', quality: 'Cardinal', ruler: 'Moon', compatible: ['Scorpio', 'Pisces', 'Taurus'] },
  Leo: { element: 'Fire', quality: 'Fixed', ruler: 'Sun', compatible: ['Aries', 'Sagittarius', 'Gemini'] },
  Virgo: { element: 'Earth', quality: 'Mutable', ruler: 'Mercury', compatible: ['Taurus', 'Capricorn', 'Cancer'] },
  Libra: { element: 'Air', quality: 'Cardinal', ruler: 'Venus', compatible: ['Gemini', 'Aquarius', 'Leo'] },
  Scorpio: { element: 'Water', quality: 'Fixed', ruler: 'Pluto', compatible: ['Cancer', 'Pisces', 'Virgo'] },
  Sagittarius: { element: 'Fire', quality: 'Mutable', ruler: 'Jupiter', compatible: ['Aries', 'Leo', 'Libra'] },
  Capricorn: { element: 'Earth', quality: 'Cardinal', ruler: 'Saturn', compatible: ['Taurus', 'Virgo', 'Pisces'] },
  Aquarius: { element: 'Air', quality: 'Fixed', ruler: 'Uranus', compatible: ['Gemini', 'Libra', 'Sagittarius'] },
  Pisces: { element: 'Water', quality: 'Mutable', ruler: 'Neptune', compatible: ['Cancer', 'Scorpio', 'Capricorn'] },
};

function getChineseZodiac(date: Date): { animal: string; element: string; polarity: string } {
  const parts = new Intl.DateTimeFormat('en-u-ca-chinese', { year: 'numeric' }).formatToParts(date);
  const yearName = parts.find(part => part.type === 'yearName')?.value ?? 'jia-chen';
  const [stem, branch] = yearName.split('-');
  const animals: Record<string, string> = { zi: 'Rat', chou: 'Ox', yin: 'Tiger', mao: 'Rabbit', chen: 'Dragon', si: 'Snake', wu: 'Horse', wei: 'Goat', shen: 'Monkey', you: 'Rooster', xu: 'Dog', hai: 'Pig' };
  const elements: Record<string, string> = { jia: 'Wood', yi: 'Wood', bing: 'Fire', ding: 'Fire', wu: 'Earth', ji: 'Earth', geng: 'Metal', xin: 'Metal', ren: 'Water', gui: 'Water' };
  const yinStems = new Set(['yi', 'ding', 'ji', 'xin', 'gui']);
  return { animal: animals[branch] ?? 'Dragon', element: elements[stem] ?? 'Wood', polarity: yinStems.has(stem) ? 'Yin' : 'Yang' };
}

export default function ZodiacContent(): JSX.Element {
  const selectedDate = useDateStore(state => state.selectedDate);
  const sun = getPlanetPositions(selectedDate).find(planet => planet.name === 'Sun')!;
  const details = SIGN_DETAILS[sun.sign];
  const chinese = getChineseZodiac(selectedDate);

  return (
    <>
      <InnerHeading title={`${sun.sign} · ${sun.degree}°`} />
      <p className="text-primary-400 -mt-1 mb-3 text-xs">
        Tropical Sun sign · {selectedDate.toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}
      </p>
      <div className="-mt-2 grid items-start gap-4 text-primary-500 lg:grid-cols-[minmax(0,1.15fr)_minmax(16rem,0.85fr)]">
        <ul className="my-0 flex flex-col gap-2 self-start *:text-nowrap">
          <LinedListItem label="Element" Icon={Atom}>{details.element}</LinedListItem>
          <LinedListItem label="Quality" Icon={Scales}>{details.quality}</LinedListItem>
          <LinedListItem label="Ruling planet" Icon={Planet}>{details.ruler}</LinedListItem>
          <li className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
            <span className="flex items-center gap-1 text-sm font-semibold">
              <Heart size={14} weight="duotone" className="text-red-400" /> Compatible
            </span>
            <span className="bg-primary-300/50 hidden h-px min-w-6 flex-1 sm:block" />
            <ul className="flex flex-wrap justify-end gap-1.5">
              {details.compatible.map(sign => (
                <li key={sign} className="bg-primary-150 text-primary-500 rounded-xs px-2 py-0.5 text-xs">
                  {sign}
                </li>
              ))}
            </ul>
          </li>
        </ul>
        <SecondaryCard className="mt-0 text-xs lg:!-mt-4">
          <h4 className="text-primary-700 text-sm font-semibold">Chinese Zodiac</h4>
          <p className="text-primary-400 mt-0.5 text-xs">Chinese calendar year</p>
          <ul className="mt-2 *:text-nowrap">
            {[
              ['Animal', chinese.animal],
              ['Element', chinese.element],
              ['Yin / Yang', chinese.polarity],
            ].map(([label, value]) => (
              <li key={label} className="mt-2 flex items-center justify-between gap-3">
                <span className="font-medium">{label}</span>
                <span className="bg-primary-200/85 h-px min-w-6 flex-1" />
                <span className="text-primary-400">{value}</span>
              </li>
            ))}
          </ul>
        </SecondaryCard>
      </div>
    </>
  );
}
