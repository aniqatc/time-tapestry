import { useState } from 'react';
import { Balloon } from '@phosphor-icons/react';

export default function ThemeToggle(): JSX.Element {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <button
      className={`text-primary-700 hover:animate-shake cursor-pointer transition-all active:scale-90`}
      onMouseLeave={() => setIsHovered(false)}
      onMouseEnter={() => {
        setTimeout(() => setIsHovered(true), 150);
      }}
    >
      <Balloon size={28} weight={isHovered ? 'fill' : 'duotone'} />
    </button>
  );
}
