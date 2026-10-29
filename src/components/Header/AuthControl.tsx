// Purpose: Shows account status and sign-in or sign-out actions.
import { useAuthStore } from '../../contexts';
import { supabaseConfigured } from '../../services/supabaseClient';
import { SignIn } from '@phosphor-icons/react';

export default function AuthControl(): JSX.Element {
  const session = useAuthStore(state => state.session);
  const initialized = useAuthStore(state => state.initialized);
  const signOut = useAuthStore(state => state.signOut);
  const openSignIn = useAuthStore(state => state.openSignIn);

  if (!supabaseConfigured) {
    return <span className="text-primary-500 max-w-52 text-right text-xs">Shared database setup needed</span>;
  }

  if (!initialized) return <span className="text-primary-500 text-xs">Checking account…</span>;

  if (session?.user.email) {
    return (
      <div className="flex items-center gap-2 text-xs">
        <span className="text-primary-500 max-w-36 truncate">{session.user.email}</span>
        <button type="button" onClick={() => void signOut()} className="text-primary-700 underline">
          Sign out
        </button>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={openSignIn}
      className="bg-primary-100 text-primary-800 hover:bg-primary-150 hover:border-primary-300 focus-visible:outline-primary-400 inline-flex h-8 cursor-pointer items-center gap-1.5 rounded-sm border border-primary-250 px-3 text-[11px] font-semibold shadow-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      <SignIn size={14} weight="bold" aria-hidden="true" />
      Sign in
    </button>
  );
}
