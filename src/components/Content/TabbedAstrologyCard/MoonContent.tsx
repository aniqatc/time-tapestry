import SAMPLE from '../../../assets/moon-phases/waxing-gibbous.svg';
import { LinedListItem } from '../../reusable';
import { Eye, Asterisk } from '@phosphor-icons/react';

export default function MoonContent(): JSX.Element {
  return (
    <div className="@container p-2">
      <p className="text-primary-400 -mt-1 text-end text-xs">Detected Location: New York, NY</p>
      <div className="-mt-1 flex flex-nowrap items-center justify-between gap-4 @max-xs:mt-2 @max-xs:flex-col @max-xs:gap-2">
        <figure className="flex flex-col gap-2 px-5 py-2">
          <img src={SAMPLE} alt="" className="h-24" />
          <figcaption className="text-primary-400 text-xs font-medium text-nowrap">
            Waxing Gibbous
          </figcaption>
        </figure>
        <ul className="mt-3 flex w-full flex-col gap-2 capitalize *:text-nowrap @max-xs:mt-0">
          <LinedListItem label="Phase">Waxing Gibbous</LinedListItem>
          <LinedListItem label="Visibility" Icon={Eye}>
            92%
          </LinedListItem>
          <LinedListItem label="Sign" Icon={Asterisk}>
            Gemini
          </LinedListItem>
          <LinedListItem label="Rising">15:45</LinedListItem>
          <LinedListItem label="Setting">02:14</LinedListItem>
        </ul>
      </div>
    </div>
  );
}
