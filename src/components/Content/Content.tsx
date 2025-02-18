import { PrimaryCard } from '@components/reusable';

export default function Content(): JSX.Element {
  return (
    <div className="mx-auto -mt-9 flex h-min w-full flex-col gap-4 pr-4 pl-2 xl:max-w-[650px]">
      <section className="flex flex-wrap gap-4 lg:flex-nowrap">
        <span>
          <PrimaryCard heading="Hello World">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </PrimaryCard>
        </span>
      </section>
    </div>
  );
}
