// Purpose: Validates and saves a birthday to the signed-in account.
import { FormEvent, useState } from 'react';
import { Checkbox, Select } from '@mantine/core';
import { Cake, CalendarDots } from '@phosphor-icons/react';
import { RELATIONS } from '../../constants/relations';
import { InputWrapper, PrimaryButton } from '../../components/reusable';
import { MAX_SAVED_BIRTHDAYS, useAuthStore, useBirthdayStore, useDateStore } from '../../contexts';
import { useScreenSize } from '../../hooks';
import dayjs from 'dayjs';

import '../../styles/select.css';

export default function BirthdayForm(): JSX.Element {
  const formattedDate = useDateStore((state: { formattedDate: string }) => state.formattedDate);
  const selectedDate = useDateStore((state: { selectedDate: Date }) => state.selectedDate);
  const addBirthday = useBirthdayStore(state => state.addBirthday);
  const refreshBirthdays = useBirthdayStore(state => state.loadBirthdays);
  const birthdays = useBirthdayStore(state => state.birthdays);
  const userId = useAuthStore(state => state.session?.user.id ?? null);
  const openSignIn = useAuthStore(state => state.openSignIn);
  const birthdayCount = userId ? birthdays.filter(item => item.ownerId === userId).length : 0;
  const { width } = useScreenSize();

  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [name, setName] = useState<string>('');
  const [link, setLink] = useState<string>('');
  const [relation, setRelation] = useState<string>('');
  const [isPublic, setIsPublic] = useState<boolean>(false);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    if (!userId) {
      setMessage('Please sign in to save this birthday.');
      openSignIn();
      return;
    }
    if (birthdayCount >= MAX_SAVED_BIRTHDAYS) {
      setMessage('Limit reached. Remove a birthday to add another.');
      return;
    }
    if (!name.trim()) {
      setMessage('Enter a display name to continue.');
      return;
    }
    if (!relation) {
      setMessage('Choose who this birthday is for.');
      return;
    }
    if (link.trim()) {
      try {
        const parsedLink = new URL(link.trim());
        if (!['http:', 'https:'].includes(parsedLink.protocol)) throw new Error('Invalid protocol');
      } catch {
        setMessage('Enter a valid social profile URL, or leave it blank.');
        return;
      }
    }

    setIsSaving(true);
    try {
      const error = await addBirthday(
        {
          name: name.trim(),
          birthday: dayjs(selectedDate).toDate(),
          link: link.trim() || undefined,
          relation: relation as (typeof RELATIONS)[number],
          visibility: isPublic ? 'public' : 'private',
        },
        userId
      );
      if (error) {
        setMessage(error);
        return;
      }
      setMessage(isPublic ? 'Birthday saved and shared with the community.' : 'Birthday saved privately.');
      setName('');
      setLink('');
      setRelation('');
      setIsPublic(false);
      await refreshBirthdays(userId);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Could not save this birthday. Try again.');
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <form
      className="mt-3 flex w-full flex-col gap-2"
      autoComplete="off"
      noValidate
      onSubmit={event => void handleSubmit(event)}
    >
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-primary-800 text-sm font-semibold">Add a birthday</h3>
        <p className="text-primary-500 text-[10px]">{birthdayCount} of {MAX_SAVED_BIRTHDAYS} saved</p>
      </div>

      <InputWrapper id="date" icon={<CalendarDots size={16} weight="duotone" />} label="Birthday">
        <input
          id="date"
          type="text"
          value={formattedDate}
          readOnly
          aria-label={`Birthday date, currently ${formattedDate}`}
          className="w-full cursor-default bg-transparent py-1 text-left text-[11px] outline-0"
        />
      </InputWrapper>

      <InputWrapper id="name" label="Display name" isFocused={focusedInput === 'name'}>
        <input
          required={Boolean(userId)}
          disabled={isSaving || birthdayCount >= MAX_SAVED_BIRTHDAYS}
          type="text"
          id="name"
          placeholder="Display name"
          className="w-full bg-transparent py-1.5 text-left text-[11px] outline-0 placeholder:text-[11px] placeholder:text-primary-400 placeholder:italic"
          value={name}
          onChange={event => setName(event?.target.value)}
          onFocus={() => setFocusedInput('name')}
          onBlur={() => setFocusedInput(null)}
          autoComplete="off"
        />
      </InputWrapper>

      <InputWrapper id="link" label="Profile link" isFocused={focusedInput === 'link'}>
        <input
          disabled={isSaving || birthdayCount >= MAX_SAVED_BIRTHDAYS}
          type="url"
          id="link"
          placeholder="Optional · https://…"
          aria-label="Profile link (optional)"
          className="w-full bg-transparent py-1.5 text-left text-[11px] outline-0 placeholder:text-[11px] placeholder:text-primary-400 placeholder:italic"
          value={link}
          onChange={event => setLink(event?.target.value)}
          onFocus={() => setFocusedInput('link')}
          onBlur={() => setFocusedInput(null)}
          autoComplete="off"
        />
      </InputWrapper>

      <InputWrapper id="relation" label="Relationship" isFocused={focusedInput === 'relation'}>
        <Select
          id="relation"
          required={Boolean(userId)}
          disabled={isSaving || birthdayCount >= MAX_SAVED_BIRTHDAYS}
          placeholder="Choose one"
          data={RELATIONS}
          allowDeselect={false}
          maxDropdownHeight={width <= 600 ? 100 : 165}
          searchable
          nothingFoundMessage="Nothing found..."
          comboboxProps={{ transitionProps: { transition: 'pop-top-right', duration: 200 } }}
          value={relation}
          onChange={value => setRelation(value ?? '')}
          onFocus={() => setFocusedInput('relation')}
          onBlur={() => setFocusedInput(null)}
        />
      </InputWrapper>

      <div className="bg-primary-75 border-primary-200 rounded-sm border px-2 py-1.5">
        <Checkbox
          checked={isPublic}
          onChange={event => setIsPublic(event.currentTarget.checked)}
          disabled={isSaving || birthdayCount >= MAX_SAVED_BIRTHDAYS}
          label="Share publicly"
          description="Everyone can see it; relationship stays private."
          size="xs"
          classNames={{
            label: 'text-primary-700 text-xs font-semibold',
            description: 'text-primary-500 mt-0.5 text-[10px] leading-tight',
          }}
        />
      </div>

      <PrimaryButton
        type="submit"
        disabled={isSaving}
        icon={<Cake size={20} weight="duotone" />}
        textClassName="text-xs"
        className={!userId ? 'bg-primary-150 border-primary-300 hover:bg-primary-200' : ''}
      >
        <span className="font-bold">
          {isSaving ? 'Saving…' : userId ? 'Add Birthday' : 'Sign in to add a birthday'}
        </span>
      </PrimaryButton>
      <p role="status" aria-live="polite" className="text-primary-500 min-h-5 text-center text-[10px] leading-snug">
        {message || (!userId
          ? 'Sign in above to save birthdays to the shared database.'
          : birthdayCount >= MAX_SAVED_BIRTHDAYS
          ? 'Limit reached. Remove a birthday to add another.'
          : 'Birthdays are private unless you choose to share them.')}
      </p>
    </form>
  );
}
