import dayjs from 'dayjs';
import { PrimaryCard, Label } from '../../../components/reusable';

/* Hard coded for now */
type FamousBirthday = {
  name: string;
  birthday: Date;
  link?: string;
};

const FAKE_USERS: FamousBirthday[] = [
  {
    name: 'Super Man',
    birthday: dayjs().subtract(20, 'year').toDate(),
    link: '/',
  },
  {
    name: 'Iron Man',
    birthday: dayjs().subtract(11, 'year').toDate(),
  },
  {
    name: 'Tony Stark',
    birthday: dayjs().subtract(58, 'year').toDate(),
    link: 'https://tonystark.com',
  },
  {
    name: 'Donald Trump',
    birthday: dayjs().subtract(48, 'year').toDate(),
    link: 'https://twitter.com/trump',
  },
  {
    name: 'King Kong',
    birthday: dayjs().subtract(58, 'year').toDate(),
  },
  {
    name: 'Black Widow',
    birthday: dayjs().subtract(25, 'year').toDate(),
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
              key={crypto.randomUUID()}
              className={user.link && 'group hover:text-primary-700 transition-all hover:underline'}
            >
              <li>
                <span className="font-medium transition-all group-hover:font-bold">
                  {user.name}
                </span>{' '}
                turns {dayjs().year() - dayjs(user.birthday).year()}
              </li>
            </El>
          );
        })}
      </ul>
    </PrimaryCard>
  );
}
