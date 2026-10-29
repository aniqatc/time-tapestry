import { PrimaryCard, Label } from '../../../components/reusable';
import { useAuthStore, useBirthdayStore, useDateStore } from '../../../contexts';
import { getSocialLogo } from '../../../utils';
import BirthdayListItem from './BirthdayListItem';

export default function VerifiedUsersCard(): JSX.Element {
  const shortFormattedDate = useDateStore((state: { shortFormattedDate: string }) => state.shortFormattedDate);
  const selectedDate = useDateStore((state: { selectedDate: Date }) => state.selectedDate);
  const birthdays = useBirthdayStore(state => state.birthdays);
  const loading = useBirthdayStore(state => state.loading);
  const error = useBirthdayStore(state => state.error);
  const removeBirthday = useBirthdayStore(state => state.removeBirthday);
  const userId = useAuthStore(state => state.session?.user.id ?? null);
  const matchesDate = (user: { birthday: Date }): boolean =>
    user.birthday.getMonth() === selectedDate.getMonth() && user.birthday.getDate() === selectedDate.getDate();
  const matchingSaved = userId
    ? birthdays.filter(user => user.ownerId === userId && matchesDate(user))
    : [];
  const matchingCommunity = birthdays.filter(
    user =>
      user.visibility === 'public' &&
      (!userId || user.ownerId === null) &&
      matchesDate(user)
  );

  return (
    <PrimaryCard heading={`Birthdays on ${shortFormattedDate}`}>
      {matchingSaved.length > 0 && (
        <>
          <Label className="mb-2">Your Birthdays</Label>
          <ul className="mb-3">
            {matchingSaved.map((user, index) => {
              const LinkIcon = user.link ? getSocialLogo(user.link) : 'span';
              const displayName = user.relation?.includes('Self')
                ? user.name
                : `${user.name}'s ${user.relation ?? 'birthday'}`;
              return (
                <BirthdayListItem
                  key={user.id}
                  user={user}
                  index={index}
                  type="user"
                  displayName={displayName}
                  onRemove={() => void removeBirthday(user.id)}
                >
                  <p className="group-hover:scale-115"><LinkIcon size="18" weight="duotone" /></p>
                </BirthdayListItem>
              );
            })}
          </ul>
        </>
      )}
      <Label className="mb-2">Community</Label>
      <ul>
        {matchingCommunity.map((user, index) => {
          const LinkIcon = user.link ? getSocialLogo(user.link) : 'span';

          return (
            <BirthdayListItem key={user.id} user={user} index={index} type="community" displayName={user.name}>
              <p className="group-hover:scale-115">
                <LinkIcon size="18" weight="duotone" />
              </p>
            </BirthdayListItem>
          );
        })}
        {matchingCommunity.length === 0 && (
          <li className="text-primary-500 text-sm">
            {loading ? 'Loading shared birthdays…' : error || 'No public birthdays for this date.'}
          </li>
        )}
      </ul>
    </PrimaryCard>
  );
}
