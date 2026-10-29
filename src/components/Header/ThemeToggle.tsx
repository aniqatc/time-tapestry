// Purpose: Switches between the light and dark themes.
import { Moon, Sun } from '@phosphor-icons/react';
import { useThemeStore } from '../../contexts';

export default function ThemeToggle(): JSX.Element {
  const theme = useThemeStore(state => state.theme);
  const toggleTheme = useThemeStore(state => state.toggleTheme);
  const isDark = theme === 'dark';
  const Icon = isDark ? Sun : Moon;

  function handleToggle(): void {
    const transitionDocument = document as Document & {
      startViewTransition?: (update: () => void) => unknown;
    };
    if (transitionDocument.startViewTransition) {
      transitionDocument.startViewTransition(toggleTheme);
    } else {
      toggleTheme();
    }
  }

  return (
    <button
      type="button"
      className="text-primary-700 hover:animate-shake cursor-pointer transition-all active:scale-90"
      onClick={handleToggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <Icon size={26} weight="duotone" />
    </button>
  );
}
