import { PrimaryCard } from '../../../components/reusable';
import { ON_THIS_SITE_DATA } from '../../../data/dummy';

export default function OnThisSiteCard(): JSX.Element {
  return (
    <PrimaryCard heading="On This Site" className="@container">
      <ul className="grid grid-cols-1 gap-1 @[410px]:grid-cols-2">
        {ON_THIS_SITE_DATA.map(data => {
          return (
            <li key={data.stat} className="mb-1 flex items-center gap-1 @[480px]:mb-0">
              <data.Icon size={24} weight="duotone" />
              <p className="text-primary-700 font-semibold @[410px]:flex @[410px]:flex-col @[480px]:block">
                {data.stat}{' '}
                <span className="text-primary-600 text-xs font-normal">{data.value}</span>
              </p>
            </li>
          );
        })}
      </ul>
    </PrimaryCard>
  );
}
