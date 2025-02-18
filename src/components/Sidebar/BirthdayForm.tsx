import { useState } from 'react';
import { InputWrapper } from '../reusable';
import { Select } from '@mantine/core';

const relations: string[] = [
  'Self',
  'Spouse',
  'Partner',
  'Parent',
  'Sibling',
  'Child',
  'Friend',
  'Grandparent',
  'Grandchild',
  'Relative',
];

export default function BirthdayForm(): JSX.Element {
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [relation, setRelation] = useState<string>(relations[0]);

  return (
    <form className="flex w-full flex-col gap-2">
      <InputWrapper id="name" label="Display Name" isFocused={focusedInput === 'name'}>
        <input
          type="text"
          id="name"
          placeholder="Enter Display Name..."
          className="w-full p-1 text-end outline-0 placeholder:text-xs placeholder:italic"
          value={name}
          onChange={event => setName(event?.target.value)}
          onFocus={() => setFocusedInput('name')}
          onBlur={() => setFocusedInput(null)}
          autoComplete="off"
        />
      </InputWrapper>

      <InputWrapper id="email" label="Email" isFocused={focusedInput === 'email'}>
        <input
          type="email"
          id="email"
          placeholder="Enter Valid Email..."
          className="w-full p-1 text-end outline-0 placeholder:text-xs placeholder:italic"
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
          data={relations}
          allowDeselect={false}
          maxDropdownHeight={165}
          searchable
          nothingFoundMessage="Nothing found..."
          comboboxProps={{ transitionProps: { transition: 'pop-top-right', duration: 200 } }}
          styles={{
            wrapper: {
              marginRight: '-0.5rem',
            },
            input: {
              color: '#0D3B76',
              width: '100%',
              height: '2.25rem',
              textAlign: 'end',
              fontSize: '0.875rem',
              borderColor: 'transparent',
              backgroundColor: 'transparent',
              ':focus': {
                borderColor: 'transparent',
                outline: 'none',
              },
            },
            root: {
              width: '135px',
              marginLeft: 'auto',
            },
            dropdown: {
              marginTop: '-0.25rem',
            },
            option: {
              justifyContent: 'flex-end',
              color: '#4D5A6D',
            },
          }}
          value={relation}
          onChange={setRelation as any}
          onFocus={() => setFocusedInput('relation')}
          onBlur={() => setFocusedInput(null)}
        />
      </InputWrapper>
    </form>
  );
}
