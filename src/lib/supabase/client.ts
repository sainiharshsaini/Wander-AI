import { createClient } from "@supabase/supabase-js";

// Access environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Ensure that environment variables are loaded
if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing Supabase environment variables');
}

// Create and export the Supabase client
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;