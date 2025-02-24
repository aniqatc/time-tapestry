import OnThisSiteCard from './OnThisSiteCard/OnThisSiteCard';
import BirthdaysCard from './BirthdaysCard/BirthdaysCard';
import NotableEventsCard from './NotableEventsCard/NotableEventsCard';
import TabbedAstrologyCard from './TabbedAstrologyCard/TabbedAstrologyCard';

export default function Content(): JSX.Element {
  return (
    <div className="flex w-full flex-col gap-4 pr-3 pb-24 pl-2 lg:ml-[350px] lg:max-w-[655px] xl:mx-auto">
      <section className="flex flex-wrap gap-3 lg:flex-nowrap">
        <BirthdaysCard />
      </section>
      <section>
        <NotableEventsCard />
      </section>
      <section className="relative">
        <TabbedAstrologyCard />
      </section>
      <section className="mt-9 lg:mt-0">
        <OnThisSiteCard />
      </section>
    </div>
  );
}
