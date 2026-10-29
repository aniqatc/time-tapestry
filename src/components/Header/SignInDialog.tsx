import { FormEvent, useEffect, useRef, useState } from 'react';
import { X } from '@phosphor-icons/react';
import { useAuthStore } from '../../contexts';
import { supabaseConfigured } from '../../services/supabaseClient';

export default function SignInDialog(): JSX.Element | null {
  const isOpen = useAuthStore(state => state.signInOpen);
  const closeSignIn = useAuthStore(state => state.closeSignIn);
  const sendSignInLink = useAuthStore(state => state.sendSignInLink);
  const error = useAuthStore(state => state.error);
  const emailInput = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState('');
  const [notice, setNotice] = useState('');
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    if (isOpen) emailInput.current?.focus();
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    function handleKeyDown(event: KeyboardEvent): void {
      if (event.key === 'Escape') closeSignIn();
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [closeSignIn, isOpen]);

  if (!isOpen) return null;

  async function handleSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    if (!supabaseConfigured) {
      setNotice('Connect the Supabase project before signing in.');
      return;
    }
    setIsSending(true);
    setNotice('');
    const sent = await sendSignInLink(email);
    setIsSending(false);
    if (sent) setNotice('Check your email for a sign-in link.');
  }

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-slate-950/40 px-4"
      onMouseDown={event => {
        if (event.target === event.currentTarget) closeSignIn();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="sign-in-title"
        className="bg-primary-25 border-primary-200 relative w-full max-w-sm rounded-md border p-4 shadow-xl"
      >
        <button
          type="button"
          aria-label="Close sign-in dialog"
          onClick={closeSignIn}
          className="text-primary-500 hover:text-primary-800 absolute top-2.5 right-2.5 rounded p-1"
        >
          <X size={18} />
        </button>
        <h2 id="sign-in-title" className="text-primary-900 mb-1 text-sm font-semibold">
          Sign in to add a birthday
        </h2>
        <p className="text-primary-500 mb-3 text-xs leading-[1.15rem]">
          We’ll email you a secure sign-in link. Your saved birthdays stay private unless you choose to share them.
        </p>
        <form onSubmit={event => void handleSubmit(event)} className="flex flex-col gap-2.5">
          <label htmlFor="sign-in-email" className="text-primary-700 text-xs font-medium">
            Email address
          </label>
          <input
            ref={emailInput}
            id="sign-in-email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
            placeholder="you@example.com"
            className="border-primary-200 rounded border bg-white px-3 py-1.5 text-[13px] outline-none focus:border-primary-400"
          />
          <button
            type="submit"
            disabled={isSending}
            className="bg-primary-100 text-primary-800 rounded px-3 py-1.5 text-[13px] font-medium disabled:cursor-wait disabled:opacity-50"
          >
            {isSending ? 'Sending…' : 'Email me a sign-in link'}
          </button>
        </form>
        {(notice || error) && (
          <p role="status" aria-live="polite" className={`mt-3 text-xs ${error ? 'text-red-700' : 'text-primary-600'}`}>
            {error || notice}
          </p>
        )}
      </section>
    </div>
  );
}
