// Purpose: Stores authentication state and sign-in actions.
import { create } from 'zustand';
import type { Session } from '@supabase/supabase-js';
import { supabase } from '../services/supabaseClient';

interface AuthState {
  session: Session | null;
  initialized: boolean;
  error: string | null;
  signInOpen: boolean;
  openSignIn: () => void;
  closeSignIn: () => void;
  initialize: () => () => void;
  sendSignInLink: (email: string) => Promise<boolean>;
  signOut: () => Promise<void>;
}

export const useAuthStore = create<AuthState>(set => ({
  session: null,
  initialized: false,
  error: null,
  signInOpen: false,
  openSignIn: () => set({ signInOpen: true, error: null }),
  closeSignIn: () => set({ signInOpen: false }),
  initialize: () => {
    if (!supabase) {
      set({ initialized: true });
      return () => undefined;
    }

    let active = true;
    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      if (active) set({ session, initialized: true, error: null, ...(session ? { signInOpen: false } : {}) });
    });
    void supabase.auth.getSession().then(({ data: sessionData, error }) => {
      if (!active) return;
      set({ session: sessionData.session, initialized: true, error: error?.message ?? null });
    }).catch(() => {
      if (active) set({ initialized: true, error: 'Could not check your sign-in status.' });
    });

    return () => {
      active = false;
      data.subscription.unsubscribe();
    };
  },
  sendSignInLink: async email => {
    if (!supabase) return false;
    set({ error: null });
    try {
      const { error } = await supabase.auth.signInWithOtp({
        email: email.trim(),
        options: { emailRedirectTo: window.location.origin },
      });
      if (error) {
        set({ error: error.message });
        return false;
      }
      return true;
    } catch {
      set({ error: 'Could not send the sign-in link. Check your connection and try again.' });
      return false;
    }
  },
  signOut: async () => {
    if (!supabase) return;
    try {
      const { error } = await supabase.auth.signOut();
      if (error) set({ error: error.message });
      else set({ session: null, error: null });
    } catch {
      set({ error: 'Could not sign out. Check your connection and try again.' });
    }
  },
}));

