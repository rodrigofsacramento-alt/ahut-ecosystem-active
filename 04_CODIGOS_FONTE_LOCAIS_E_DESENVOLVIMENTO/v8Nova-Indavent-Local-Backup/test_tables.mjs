import { createClient } from '@supabase/supabase-js';
const supabase = createClient('https://ldfcqxeehgaftxsgxkag.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxkZmNxeGVlaGdhZnR4c2d4a2FnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MjQ4MDQyMywiZXhwIjoyMDg4MDU2NDIzfQ.KfaCh5JYefV5kVlZeRg-cg_-4QELo8vhDK5TqpShuNY');
async function test() {
  const { data, error } = await supabase.rpc('get_tables_names_or_something'); 
  // since RPC doesn't exist, let's just query a known table or check swagger?
  // Let's just ask Supabase via REST or postgrest
  const { data: leads } = await supabase.from('leads').select('*').limit(1);
  console.log("Leads has:", leads ? Object.keys(leads[0] || {}) : "no data");
}
test();
