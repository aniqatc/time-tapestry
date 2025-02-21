import dayjs from 'dayjs';
import { PrimaryCard, Label } from '../../../components/reusable';

/* Hard coded for now */
type FamousBirthday = {
  name: string;
  birthday: Date;
  link?: string;
  occupation?: string;
};

const FAKE_USERS: FamousBirthday[] = [
  {
    name: 'Super Man',
    birthday: dayjs().subtract(20, 'year').toDate(),
    link: '/',
    occupation: 'Superhero',
  },
  {
    name: 'Iron Man',
    birthday: dayjs().subtract(11, 'year').toDate(),
  },
  {
    name: 'Tony Stark',
    birthday: dayjs().subtract(58, 'year').toDate(),
    link: 'https://tonystark.com',
    occupation: 'Businessman',
  },
  {
    name: 'Donald Trump',
    birthday: dayjs().subtract(48, 'year').toDate(),
    link: 'https://twitter.com/trump',
    occupation: 'President',
  },
  {
    name: 'King Kong',
    birthday: dayjs().subtract(58, 'year').toDate(),
  },
  {
    name: 'Black Widow',
    birthday: dayjs().subtract(25, 'year').toDate(),
    occupation: 'Superhero',
  },
];

export default function NotableFiguresCard(): JSX.Element {
  return (
    <PrimaryCard>
      <Label className="mb-2">Notable Figures</Label>
      <ul>
        {FAKE_USERS.map((user, index) => {
          if (index >= 5) return;
          const El = user.link ? 'a' : 'span';

          return (
            <El
              href={user.link}
              target="_blank"
              key={crypto.randomUUID()}
              className={user.link && 'group hover:text-primary-700 transition-all hover:underline'}
            >
              <li className="mb-0.5 flex items-center justify-between gap-2">
                <p className="shrink-0">
                  <span className="font-medium transition-all group-hover:font-bold">
                    {user.name}
                  </span>{' '}
                  turns{' '}
                  <span className="text-primary-700 font-medium">
                    {dayjs().year() - dayjs(user.birthday).year()}
                  </span>
                </p>
                <span className="bg-primary-300/50 h-[1px] w-full"></span>
                <p className="text-primary-700 shrink-0 font-medium">{user?.occupation}</p>
              </li>
            </El>
          );
        })}
      </ul>
    </PrimaryCard>
  );
}
