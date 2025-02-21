import dayjs from 'dayjs';
import { PrimaryCard, Label } from '../../../components/reusable';
import { useDateStore } from '../../../contexts';
import { RELATIONS } from '../../../constants/relations';
import {
  Icon,
  UserSquare,
  XLogo,
  Butterfly,
  LinkedinLogo,
  FacebookLogo,
  CodepenLogo,
  InstagramLogo,
  RedditLogo,
  TwitchLogo,
  YoutubeLogo,
} from '@phosphor-icons/react';

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
    link: 'https://bsky.app',
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

function getLinkType(link: string): Icon {
  if (link.includes('linkedin')) {
    return LinkedinLogo;
  }

  if (link.includes('bsky') || link.includes('bluesky')) {
    return Butterfly;
  }

  if (link.includes('youtube')) {
    return YoutubeLogo;
  }

  if (link.includes('twitch')) {
    return TwitchLogo;
  }

  if (link.includes('instagram')) {
    return InstagramLogo;
  }

  if (link.includes('reddit')) {
    return RedditLogo;
  }

  if (link.includes('codepen')) {
    return CodepenLogo;
  }

  if (link.includes('facebook')) {
    return FacebookLogo;
  }

  if (link.includes('linkedin')) {
    return LinkedinLogo;
  }

  if (link.includes('x.com')) {
    return XLogo;
  }

  return UserSquare;
}

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
          const LinkIcon = user.link ? getLinkType(user.link) : 'span';

          return (
            <El
              href={user.link}
              target="_blank"
              key={crypto.randomUUID()}
              className={user.link && 'group hover:text-primary-700 transition-all hover:underline'}
            >
              <li className="mb-0.5 flex items-center justify-between gap-2 lowercase">
                <p>
                  <span className="font-medium transition-all group-hover:font-bold">
                    @{user.relation === 'Self' ? user.name : `${user.name}'s ${user.relation}`}
                  </span>{' '}
                  turns{' '}
                  <span className="text-primary-700 font-medium">
                    {dayjs().year() - dayjs(user.birthday).year()}
                  </span>
                </p>
                <p className="group-hover:scale-115">
                  <LinkIcon size="18" weight="duotone" />
                </p>
              </li>
            </El>
          );
        })}
      </ul>
    </PrimaryCard>
  );
}
