// Purpose: Shows the shared loading indicator.
import { CircleNotch } from '@phosphor-icons/react';

export default function Loading(): JSX.Element {
  return (
    <div className="flex w-full justify-center">
      <CircleNotch size={24} className="text-primary-500 animate-spin" weight="bold" />
    </div>
  );
}
