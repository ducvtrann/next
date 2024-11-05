import { create } from 'zustand';
import { Session, supabase } from '@/utils/supabase';
import { useEffect } from 'react';

interface AuthState {
  isAuthenticated: boolean;
  token?: Session['access_token'];
}

interface AuthActions {
  signIn: (email: string, password: string) => void;
  signOut: () => void;
  signUp: (email: string, password: string) => void;
  updateIsAuthenticated: (isAuthenticated: boolean) => void;
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
  updateIsAuthenticated: (isAuthenticated) => {
    set({ isAuthenticated });
  },
}));

export const useAuthListener = () => {
  const updateIsAuthenticated = useAuthStore((state) => state.updateIsAuthenticated);
  console.log('useAuthListener');
  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      console.log('onAuthStateChange', event, session);
      switch (event) {
        case 'SIGNED_OUT':
          updateIsAuthenticated(false);
          break;
        case 'INITIAL_SESSION':
          updateIsAuthenticated(true);
          break;
        case 'SIGNED_IN':
        case 'TOKEN_REFRESHED':
          updateIsAuthenticated(true);
          break;
        default:
        // no-op
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [supabase]);
};
