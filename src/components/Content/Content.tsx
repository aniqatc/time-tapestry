import { PrimaryCard } from '@components/reusable';
import { useDateStore } from '@contexts';

export default function Content(): JSX.Element {
  const formattedDate = useDateStore((state: { formattedDate: string }) => state.formattedDate);

  return (
    <div className="mx-auto -mt-9 flex h-min w-full flex-col gap-4 pr-4 pl-2 xl:max-w-[655px]">
      <section className="flex flex-wrap gap-3 lg:flex-nowrap">
        <PrimaryCard heading={`Birthdays on ${formattedDate}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </PrimaryCard>
        <PrimaryCard>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </PrimaryCard>
      </section>
      <section>
        <PrimaryCard heading={`Notable Events on ${formattedDate}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </PrimaryCard>
      </section>
    </div>
  );
}
