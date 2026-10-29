import { create } from 'zustand';

export type ThemeMode = 'light' | 'dark';

interface ThemeState {
  theme: ThemeMode;
  toggleTheme: () => void;
}

function getInitialTheme(): ThemeMode {
  if (typeof window === 'undefined') return 'light';
  try {
    return window.localStorage.getItem('time-tapestry-theme') === 'dark' ? 'dark' : 'light';
  } catch {
    return 'light';
  }
}

export const useThemeStore = create<ThemeState>(set => ({
  theme: getInitialTheme(),
  toggleTheme: () =>
    set(state => {
      const theme = state.theme === 'dark' ? 'light' : 'dark';
      try {
        window.localStorage.setItem('time-tapestry-theme', theme);
      } catch {
        // Keep the current session usable when browser storage is unavailable.
      }
      return { theme };
    }),
}));
