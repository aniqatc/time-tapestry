// Purpose: Loads and displays notable birthdays for the selected date.
import { useState, useEffect } from 'react';
import { PrimaryCard, Label, Loading } from '../../../components/reusable';
import BirthdayListItem from './BirthdayListItem';
import { FamousBirthday } from '../../../types';
import { useDateStore } from '../../../contexts';
import { fetchBirthdaysFromWikimedia } from '../../../data';

export default function NotableFiguresCard(): JSX.Element {
  const selectedDate = useDateStore((state: { selectedDate: Date }) => state.selectedDate);
  const [famousBirthdays, setFamousBirthdays] = useState<FamousBirthday[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    async function loadEvents() {
      setIsLoading(true);
      setLoadError(null);
      try {
        const fetchedBirthdays = await fetchBirthdaysFromWikimedia(selectedDate.getDate(), selectedDate.getMonth());
        if (active) {
          setFamousBirthdays(
            fetchedBirthdays.filter(person => person.birthday.getFullYear() <= selectedDate.getFullYear())
          );
        }
      } catch (error) {
        if (active) {
          setFamousBirthdays([]);
          setLoadError(error instanceof Error ? error.message : 'Could not load notable birthdays.');
        }
      } finally {
        if (active) setIsLoading(false);
      }
    }
    void loadEvents();
    return () => {
      active = false;
    };
  }, [selectedDate]);

  return (
    <PrimaryCard fillHeight>
      {isLoading ? (
        <Loading />
      ) : loadError ? (
        <p role="status" className="text-primary-500 text-sm">{loadError}</p>
      ) : (
        <>
          <Label className="mb-2">Notable Figures</Label>
          {famousBirthdays.length === 0 ? (
            <p className="text-primary-500 text-sm">No notable birthdays found for this date.</p>
          ) : (
            <ul>
            {famousBirthdays.map((user, index) => (
              <BirthdayListItem key={`${user.birthday.getFullYear()}-${user.name}-${user.link ?? index}`} user={user} index={index} type="famous">
                <span className="bg-primary-300/50 h-px min-w-2 flex-1"></span>
                <p className="text-primary-700 max-w-[38%] shrink-0 break-words text-right text-xs font-medium capitalize">
                  {user.occupation}
                </p>
              </BirthdayListItem>
            ))}
            </ul>
          )}
        </>
      )}
    </PrimaryCard>
  );
}
