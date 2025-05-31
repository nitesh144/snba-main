import {createClient} from '@supabase/supabase-js';

const supabaseURL = import.meta.env.VITE_SUPABASE_URL
const supabaseKEY = import.meta.env.VITE_SUPABASE_ANONY_KEY
const supabase = createClient(supabaseURL, supabaseKEY);

export default supabase;