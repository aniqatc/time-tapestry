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
          25: '#FCFDFF',
          50: '#E1EBF9',
          75: '#F4F7FB',
          100: '#D2DEEE',
          150: '#DCE7F7',
          200: '#D8E0EA',
          250: '#B8C7DC',
          300: '#99ACC5',
          400: '#7A94B7',
          500: '#59769D',
          600: '#43628C',
          700: '#2F4F79',
          800: '#0D3B76',
          900: '#2C3F59',
        },
        gray: {
          light: '#E9E9E9',
          medium: '#90969D',
          dark: '#4D5A6D',
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
