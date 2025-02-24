import SAMPLE from '../../../assets/moon-phases/waxing-gibbous.svg';

export default function MoonContent(): JSX.Element {
  return (
    <div className="p-2">
      <p className="text-primary-400 -mt-1 text-end text-xs">Detected Location: New York, NY</p>
      <div className="-mt-1 flex items-center justify-between gap-4">
        <figure className="flex flex-col gap-2 px-5 py-2">
          <img src={SAMPLE} alt="" className="h-24" />
          <figcaption className="text-primary-400 text-xs font-medium text-nowrap">
            Waxing Gibbous
          </figcaption>
        </figure>
        <ul className="flex w-full flex-col gap-1 capitalize *:text-nowrap">
          <li className="mt-2 flex items-center gap-2">
            <span className="text-sm font-semibold">Phase</span>
            <span className="bg-primary-300/50 h-[1px] w-full"></span>
            <span className="text-primary-600">Waxing Gibbous | 92%</span>
          </li>
          <li className="mt-2 flex items-center gap-2">
            <span className="text-sm font-semibold">Sign</span>
            <span className="bg-primary-300/50 h-[1px] w-full"></span>
            <span className="text-primary-600">Gemini</span>
          </li>
          <li className="mt-2 flex items-center gap-2">
            <span className="text-sm font-semibold">Rising</span>
            <span className="bg-primary-300/50 h-[1px] w-full"></span>
            <span className="text-primary-600">15:43</span>
          </li>
          <li className="mt-2 flex items-center gap-2">
            <span className="text-sm font-semibold">Setting</span>
            <span className="bg-primary-300/50 h-[1px] w-full"></span>
            <span className="text-primary-600">02:14</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
