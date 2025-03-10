import { PrimaryCard, Label } from '../../../components/reusable';
import { useDateStore } from '../../../contexts';
import { getSocialLogo } from '../../../utils';
import { VERIFIED_USERS } from '../../../data/dummy';
import BirthdayListItem from './BirthdayListItem';

export default function VerifiedUsersCard(): JSX.Element {
  const shortFormattedDate = useDateStore((state: { shortFormattedDate: string }) => state.shortFormattedDate);

  return (
    <PrimaryCard heading={`Birthdays on ${shortFormattedDate}`}>
      <Label className="mb-2">Verified Users</Label>
      <ul>
        {VERIFIED_USERS.map((user, index) => {
          const LinkIcon = user.link ? getSocialLogo(user.link) : 'span';
          const displayName = user.relation.includes('Self') ? user.name : `${user.name}'s ${user.relation}`;

          return (
            <BirthdayListItem key={crypto.randomUUID()} user={user} index={index} type="user" displayName={displayName}>
              <p className="group-hover:scale-115">
                <LinkIcon size="18" weight="duotone" />
              </p>
            </BirthdayListItem>
          );
        })}
      </ul>
    </PrimaryCard>
  );
}
