import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MantineProvider, createTheme } from '@mantine/core';

import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';

import '@styles/index.css';
import App from './App.tsx';

const theme = createTheme({
  fontFamily: 'inherit',
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </StrictMode>
);
