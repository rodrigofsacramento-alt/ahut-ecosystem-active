import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://ldfcqxeehgaftxsgxkag.supabase.co";
const SUPABASE_SERVICE_ROLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxkZmNxeGVlaGdhZnR4c2d4a2FnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MjQ4MDQyMywiZXhwIjoyMDg4MDU2NDIzfQ.KfaCh5JYefV5kVlZeRg-cg_-4QELo8vhDK5TqpShuNY";

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

async function main() {
  // Check definition of send_whatsapp_message via sql query or test sending
  console.log("=== Checking Functions & Triggers ===");
  const { data: procs, error: pErr } = await supabase
    .rpc('get_db_functions')
    .catch(() => ({ data: null }));

  // Or let's query pg_proc via a test if we have permissions or inspect via RPC
  // Let's test calling send_whatsapp_message on a dummy or reading pg_proc
  console.log("Let's check what tables and triggers exist:");
  const { data: conv } = await supabase.from('conversations').select('*').limit(1);
  console.log("Sample conversation:", conv);
}

main().catch(console.error);
