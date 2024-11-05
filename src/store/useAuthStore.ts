import { create } from 'zustand';
import { Session, supabase } from '@/utils/supabase';

interface AuthState {
  isAuthenticated: boolean;
  token?: Session['access_token'];
}

interface AuthActions {
  signIn: (email: string, password: string) => void;
  signOut: () => void;
  signUp: (email: string, password: string) => void;
}

export const useAuthStore = create<AuthState & AuthActions>((set) => ({
  isAuthenticated: false,
  token: undefined,
  signIn: async (email, password) => {
    try {
      const result = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (result.data?.session?.access_token) {
        set({ isAuthenticated: true, token: result.data.session.access_token });
      }

      return result;
    } catch (error) {
      console.error(error);
    }
  },
  signOut: async () => {
    try {
      await supabase.auth.signOut();
      set({ isAuthenticated: false, token: undefined });
    } catch (error) {
      console.error(error);
    }
  },
  signUp: async (email, password) => {
    try {
      const result = await supabase.auth.signUp({
        email,
        password,
      });
      if (result.data?.session?.access_token) {
        set({ isAuthenticated: true, token: result.data.session.access_token });
      }

      return result;
    } catch (error) {
      console.error(error);
    }
  },
}));
