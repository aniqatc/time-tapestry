import { useAuthStore } from '../../contexts';
import { supabaseConfigured } from '../../services/supabaseClient';

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
      className="text-primary-700 cursor-pointer rounded border border-primary-200 px-2 py-1 text-xs"
    >
      Sign in
    </button>
  );
}
