import { PrimaryCard, Label } from '@components/reusable';
import { useDateStore } from '@contexts';
import { ArrowUpRight } from '@phosphor-icons/react';

export default function Content(): JSX.Element {
  const shortFormattedDate = useDateStore(
    (state: { shortFormattedDate: string }) => state.shortFormattedDate
  );

  return (
    <div className="-mt-9 flex w-full flex-col gap-4 overflow-y-auto pr-4 pb-28 pl-2 max-[650px]:-mt-2 max-[535px]:pl-16 lg:ml-[350px] lg:max-w-[655px] xl:mx-auto">
      <section className="flex flex-wrap gap-3 lg:flex-nowrap">
        <PrimaryCard heading={`Birthdays on ${shortFormattedDate}`}>
          <Label className="mb-2">Notable Persons</Label>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </PrimaryCard>
        <PrimaryCard>
          <Label className="mb-2">User Birthdays</Label>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </PrimaryCard>
      </section>
      <section>
        <PrimaryCard heading={`Notable Events on ${shortFormattedDate}`}>
          <ul className="flex flex-col gap-2">
            <li>
              <a
                href="#"
                className="group hover:bg-primary-50/45 -mx-2 -my-1 flex items-start justify-between gap-2 rounded-xs px-2 py-1 *:transition-all *:duration-200"
              >
                <Label className="group-hover:text-primary-500" number="true">
                  1290
                </Label>
                <span className="group-hover:text-primary-700 mr-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </span>
                <ArrowUpRight
                  size={20}
                  className="text-primary-30 group-active:text-primary-800 group-hover:text-primary-800 mt-1 ml-2 shrink-0 group-hover:rotate-45 group-active:rotate-45"
                />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="group hover:bg-primary-50/45 -mx-2 -my-1 flex items-start justify-between gap-2 rounded-xs px-2 py-1 *:transition-all *:duration-200"
              >
                <Label className="group-hover:text-primary-500" number="true">
                  1290
                </Label>
                <span className="group-hover:text-primary-700 mr-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </span>
                <ArrowUpRight
                  size={20}
                  className="text-primary-30 group-active:text-primary-800 group-hover:text-primary-800 mt-1 ml-2 shrink-0 group-hover:rotate-45 group-active:rotate-45"
                />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="group hover:bg-primary-50/45 -mx-2 -my-1 flex items-start justify-between gap-2 rounded-xs px-2 py-1 *:transition-all *:duration-200"
              >
                <Label className="group-hover:text-primary-500" number="true">
                  1290
                </Label>
                <span className="group-hover:text-primary-700 mr-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </span>
                <ArrowUpRight
                  size={20}
                  className="text-primary-30 group-active:text-primary-800 group-hover:text-primary-800 mt-1 ml-2 shrink-0 group-hover:rotate-45 group-active:rotate-45"
                />
              </a>
            </li>
          </ul>
        </PrimaryCard>
      </section>
    </div>
  );
}
