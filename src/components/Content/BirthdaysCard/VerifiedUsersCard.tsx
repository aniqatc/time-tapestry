import dayjs from 'dayjs';
import { PrimaryCard, Label } from '../../../components/reusable';
import { useDateStore } from '../../../contexts';
import { RELATIONS } from '../../../constants/relations';

/* Hard coded for now */
type UserBirthday = {
  name: string;
  birthday: Date;
  link?: string;
  relation: (typeof RELATIONS)[number];
};

const FAKE_USERS: UserBirthday[] = [
  {
    name: 'aniqatc',
    birthday: dayjs().subtract(20, 'year').toDate(),
    link: 'https://aniqa.dev',
    relation: 'Self',
  },
  {
    name: 'timothy',
    birthday: dayjs().subtract(11, 'year').toDate(),
    relation: 'Sister',
  },
  {
    name: 'johndoe',
    birthday: dayjs().subtract(58, 'year').toDate(),
    link: 'https://johndoe.com',
    relation: 'Self',
  },
  {
    name: 'cooldude',
    birthday: dayjs().subtract(48, 'year').toDate(),
    link: 'https://twitter.com/cooldude',
    relation: 'Self',
  },
  {
    name: 'johndoe',
    birthday: dayjs().subtract(58, 'year').toDate(),
    relation: 'Wife',
  },
  {
    name: 'janedoe',
    birthday: dayjs().subtract(25, 'year').toDate(),
    relation: 'Husband',
  },
];

export default function VerifiedUsersCard(): JSX.Element {
  const shortFormattedDate = useDateStore(
    (state: { shortFormattedDate: string }) => state.shortFormattedDate
  );

  return (
    <PrimaryCard heading={`Birthdays on ${shortFormattedDate}`}>
      <Label className="mb-2">Verified Users</Label>
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
              <li className="mb-0.5 lowercase">
                <span className="font-medium transition-all group-hover:font-bold">
                  @{user.relation === 'Self' ? user.name : `${user.name}'s ${user.relation}`}
                </span>{' '}
                turns{' '}
                <span className="text-primary-700 font-medium">
                  {dayjs().year() - dayjs(user.birthday).year()}
                </span>
              </li>
            </El>
          );
        })}
      </ul>
    </PrimaryCard>
  );
}
