import { createBrowserClient } from '@supabase/ssr'

// Use import.meta.env instead of process.env for Vite projects
export const createClient = () => {
  return createBrowserClient(
    import.meta.env.VITE_SUPABASE_URL || import.meta.env.NEXT_PUBLIC_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY || import.meta.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
};