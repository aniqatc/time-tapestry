// Purpose: Configures app colors, typography, breakpoints, and animations.
import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
        mono: [
          'Geist Mono',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace',
        ],
      },
      screens: {
        xs: '550px',
      },
      text: {
        xxs: '0.7rem',
      },
      colors: {
        primary: {
          25: 'var(--tt-primary-25)',
          50: 'var(--tt-primary-50)',
          75: 'var(--tt-primary-75)',
          100: 'var(--tt-primary-100)',
          150: 'var(--tt-primary-150)',
          200: 'var(--tt-primary-200)',
          250: 'var(--tt-primary-250)',
          300: 'var(--tt-primary-300)',
          400: 'var(--tt-primary-400)',
          500: 'var(--tt-primary-500)',
          600: 'var(--tt-primary-600)',
          700: 'var(--tt-primary-700)',
          800: 'var(--tt-primary-800)',
          900: 'var(--tt-primary-900)',
        },
        gray: {
          light: 'var(--tt-gray-light)',
          medium: 'var(--tt-gray-medium)',
          dark: 'var(--tt-gray-dark)',
        },
        chart: {
          moon: '#2670D2',
          sun: '#D3CB5D',
          mercury: '#46B277',
          venus: '#BF57BF',
          mars: '#B50928',
          jupiter: '#7450E2',
          saturn: '#C16718',
        },
      },
      boxShadow: {
        primary: '1px 1px 8px 0 rgba(0, 0, 0, 0.1)',
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-20deg)' },
          '75%': { transform: 'rotate(20deg)' },
        },
        'subtle-shake': {
          '0%, 40%, 60%, 100%': { transform: 'rotate(0deg) scale(1)' },
          '45%': { transform: 'rotate(-15deg) scale(1.02)' },
          '55%': { transform: 'rotate(15deg) scale(1.02)' },
        },
      },
      animation: {
        shake: 'shake 0.5s ease-in-out',
        'subtle-shake': 'subtle-shake 2s ease-in infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
