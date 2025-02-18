import { useState } from 'react';
import { Select } from '@mantine/core';
import { Cake, CalendarDots } from '@phosphor-icons/react';
import { RELATIONS } from '@constants/relations';
import { selectStyles } from '@styles/mantineSelect';
import { InputWrapper, PrimaryButton } from '@components/reusable';
import { useDateStore } from '@contexts';

export default function BirthdayForm(): JSX.Element {
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const formattedDate = useDateStore((state: { formattedDate: string }) => state.formattedDate);

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [relation, setRelation] = useState<string>(RELATIONS[0]);

  return (
    <form
      className="flex w-full flex-col gap-2"
      autoComplete="off"
      onSubmit={event => {
        event.preventDefault();
      }}
    >
      <InputWrapper id="date" icon={<CalendarDots size={24} weight="duotone" />} label="Selected">
        <input
          id="date"
          type="text"
          value={formattedDate}
          readOnly
          className="w-full p-1 text-end outline-0"
        />
      </InputWrapper>

      <InputWrapper id="name" label="Display Name" isFocused={focusedInput === 'name'}>
        <input
          required
          type="text"
          id="name"
          placeholder="Enter Display Name..."
          className="placeholder:text-xxs w-full p-1 text-end outline-0 placeholder:italic"
          value={name}
          onChange={event => setName(event?.target.value)}
          onFocus={() => setFocusedInput('name')}
          onBlur={() => setFocusedInput(null)}
          autoComplete="off"
        />
      </InputWrapper>

      <InputWrapper id="email" label="Email" isFocused={focusedInput === 'email'}>
        <input
          required
          type="email"
          id="email"
          placeholder="Enter Valid Email..."
          className="placeholder:text-xxs w-full p-1 text-end outline-0 placeholder:italic"
          value={email}
          onChange={event => setEmail(event?.target.value)}
          onFocus={() => setFocusedInput('email')}
          onBlur={() => setFocusedInput(null)}
          autoComplete="off"
        />
      </InputWrapper>

      <InputWrapper id="relation" label="Relation" isFocused={focusedInput === 'relation'}>
        <Select
          id="relation"
          placeholder="Pick value"
          data={RELATIONS}
          allowDeselect={false}
          maxDropdownHeight={165}
          searchable
          nothingFoundMessage="Nothing found..."
          comboboxProps={{ transitionProps: { transition: 'pop-top-right', duration: 200 } }}
          styles={selectStyles}
          value={relation}
          onChange={setRelation as any}
          onFocus={() => setFocusedInput('relation')}
          onBlur={() => setFocusedInput(null)}
        />
      </InputWrapper>

      <PrimaryButton type="submit" icon={<Cake size={24} weight="duotone" />}>
        <span className="font-bold">Add Birthday</span>
        <span className="text-primary-500 text-xs font-medium">(0/5)</span>
      </PrimaryButton>
    </form>
  );
}
