// Purpose: Starts the React app and applies the saved theme.
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './styles/index.css';

import App from './App.tsx';
import { useThemeStore } from './contexts';

const applyTheme = (theme: 'light' | 'dark'): void => {
  document.documentElement.dataset.theme = theme;
};

applyTheme(useThemeStore.getState().theme);
useThemeStore.subscribe(state => applyTheme(state.theme));

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
