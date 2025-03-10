import { useState, useEffect } from 'react';
import { PrimaryCard, Label, Loading } from '../../../components/reusable';
import BirthdayListItem from './BirthdayListItem';
import { FamousBirthday } from '../../../types';
import { useDateStore } from '../../../contexts';
import { fetchBirthdaysFromWikimedia } from '../../../data';

export default function NotableFiguresCard(): JSX.Element {
  const selectedDate = useDateStore((state: { selectedDate: Date }) => state.selectedDate);
  const [famousBirthdays, setFamousBirthdays] = useState<FamousBirthday[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function loadEvents() {
      setIsLoading(true);
      try {
        const fetchedBirthdays = await fetchBirthdaysFromWikimedia(selectedDate.getDate(), selectedDate.getMonth());
        setFamousBirthdays(fetchedBirthdays);
      } catch {
        console.log('Error fetching birthdays from Wikimedia API. Try again later.');
      } finally {
        setIsLoading(false);
      }
    }
    loadEvents();
  }, [selectedDate]);

  if (famousBirthdays.length < 0) return <></>;

  return (
    <PrimaryCard>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Label className="mb-2">Notable Figures</Label>
          <ul>
            {famousBirthdays.map((user, index) => (
              <BirthdayListItem key={crypto.randomUUID()} user={user} index={index} type="famous">
                <span className="bg-primary-300/50 h-[1px] w-full"></span>
                <p className="text-primary-700 shrink-0 font-medium capitalize">{user.occupation}</p>
              </BirthdayListItem>
            ))}
          </ul>
        </>
      )}
    </PrimaryCard>
  );
}
