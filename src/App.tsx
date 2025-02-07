import { useState } from 'react';
import { Alien } from '@phosphor-icons/react';
import viteLogo from '/vite.svg';
import reactLogo from '@assets/react.svg';

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-semibold">React TypeScript Template</h1>
      <div className="flex gap-2">
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <p className="w-[35ch] max-w-md text-center text-sm">
        React TypeScript template using Tailwind and Framer Motion with formatter, linter, PWA, meta
        tags, and development scripts at the ready.
      </p>
      <ul className="text-center text-xs">
        <li>
          Language: <strong>TypeScript</strong>
        </li>
        <li>
          Styling: <strong>Tailwind</strong>
        </li>
        <li>
          Icons: <strong>Phosphor Icons</strong>
        </li>
        <li>
          Animations: <strong>Framer Motion</strong>
        </li>
        <li>
          Build Tool: <strong>Vite</strong>
        </li>
        <li>
          Formatting: <strong>Prettier</strong>
        </li>
        <li>
          Linting: <strong>ESLint</strong>
        </li>
        <li>
          Git Hooks: <strong>Husky</strong>
        </li>
        <li>
          PWA Support: <strong>Vite PWA</strong>
        </li>
        <li>
          Path Aliases: <strong>@components, @assets</strong>
        </li>
        <li>
          Development: <strong>ngrok</strong>
        </li>
      </ul>
      <div>
        <button
          className="border-primary-100 me-2 mb-2 flex items-center gap-1 rounded-lg border px-5 py-2.5 text-center text-sm font-medium"
          onClick={() => setCount(count => count + 1)}
        >
          <Alien weight="duotone" size={24} /> click to increase: {count}
        </button>
      </div>
    </main>
  );
}

export default App;
