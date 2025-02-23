import { PrimaryCard, Label } from '../../../components/reusable';
import BirthdayListItem from './BirthdayListItem';
import { FAMOUS_USERS } from '../../../data/dummy';

export default function NotableFiguresCard(): JSX.Element {
  return (
    <PrimaryCard>
      <Label className="mb-2">Notable Figures</Label>
      <ul>
        {FAMOUS_USERS.map((user, index) => (
          <BirthdayListItem user={user} index={index} type="famous">
            <span className="bg-primary-300/50 h-[1px] w-full"></span>
            <p className="text-primary-700 shrink-0 font-medium">{user.occupation}</p>
          </BirthdayListItem>
        ))}
      </ul>
    </PrimaryCard>
  );
}
