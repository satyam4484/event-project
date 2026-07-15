import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Create a mock client if env vars are missing so app doesn't crash
function createMockClient() {
  return {
    from: () => ({
      insert: () => ({
        then: (f: any) => f(),
        catch: (f: any) => f(),
      }),
    }),
  };
}

export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey) 
  : (createMockClient() as any);
