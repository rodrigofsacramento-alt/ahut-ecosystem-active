import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://ldfcqxeehgaftxsgxkag.supabase.co";
const SUPABASE_SERVICE_ROLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxkZmNxeGVlaGdhZnR4c2d4a2FnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MjQ4MDQyMywiZXhwIjoyMDg4MDU2NDIzfQ.KfaCh5JYefV5kVlZeRg-cg_-4QELo8vhDK5TqpShuNY";

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

async function main() {
  await supabase.from('messages').delete().eq('content', 'Mensagem de teste de envio no grupo');
  await supabase.from('whatsapp_messages').delete().eq('content', 'Mensagem de teste de envio no grupo');
  console.log("Cleaned up test messages.");
}

main().catch(console.error);
