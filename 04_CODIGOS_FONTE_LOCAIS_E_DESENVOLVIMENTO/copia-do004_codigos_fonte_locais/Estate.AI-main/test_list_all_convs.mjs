import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://ldfcqxeehgaftxsgxkag.supabase.co";
const SUPABASE_SERVICE_ROLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxkZmNxeGVlaGdhZnR4c2d4a2FnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MjQ4MDQyMywiZXhwIjoyMDg4MDU2NDIzfQ.KfaCh5JYefV5kVlZeRg-cg_-4QELo8vhDK5TqpShuNY";

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

async function main() {
  console.log("=== ALL CONVERSATIONS ===");
  const { data: convs, error } = await supabase
    .from('conversations')
    .select('id, subject, client_id, agent_id, last_message_at, client:profiles!conversations_client_id_fkey(id, full_name, phone)')
    .order('last_message_at', { ascending: false });
  
  if (error) console.error(error);
  else console.log(JSON.stringify(convs, null, 2));

  console.log("\n=== ALL WHATSAPP SESSIONS ===");
  const { data: sessions } = await supabase.from('whatsapp_sessions').select('*');
  console.log(sessions);
}

main().catch(console.error);
