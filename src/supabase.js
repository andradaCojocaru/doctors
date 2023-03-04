import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://wyktaraimacrnoktjtxn.supabase.co'
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY
console.log(supabaseKey);
export const supabase = createClient(supabaseUrl, supabaseKey)
