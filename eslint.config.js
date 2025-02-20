import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import reactRefresh from 'eslint-plugin-react-refresh';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';

export default tseslint.config(
  {
    ignores: ['dist', 'node_modules', '.git'],
  },
  {
    files: ['src/**/*.{ts,tsx}', 'vite.config.ts', 'tailwind.config.ts'],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
    ],
    languageOptions: {
      globals: {
        ...globals.browser,
        React: 'readonly',
        JSX: 'readonly',
      },
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'jsx-a11y': jsxA11y,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  }
);