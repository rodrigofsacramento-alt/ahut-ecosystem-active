import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://ldfcqxeehgaftxsgxkag.supabase.co";
const SUPABASE_SERVICE_ROLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxkZmNxeGVlaGdhZnR4c2d4a2FnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MjQ4MDQyMywiZXhwIjoyMDg4MDU2NDIzfQ.KfaCh5JYefV5kVlZeRg-cg_-4QELo8vhDK5TqpShuNY";

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

async function main() {
  // Let's query information_schema or test with raw sql or RPC
  // In Supabase with service role, we can query views or inspect schema
  console.log("Checking tables in public schema...");
  const { data: tables, error: tErr } = await supabase.from('whatsapp_messages').select('*').limit(1);
  console.log("whatsapp_messages cols:", tables ? Object.keys(tables[0] || {}) : tErr);

  const { data: msgsCols, error: mErr } = await supabase.from('messages').select('*').limit(1);
  console.log("messages cols:", msgsCols ? Object.keys(msgsCols[0] || {}) : mErr);

  const { data: convCols, error: cErr } = await supabase.from('conversations').select('*').limit(1);
  console.log("conversations cols:", convCols ? Object.keys(convCols[0] || {}) : cErr);

  const { data: contactsCols, error: ctErr } = await supabase.from('whatsapp_contacts').select('*').limit(1);
  console.log("whatsapp_contacts cols:", contactsCols ? Object.keys(contactsCols[0] || {}) : ctErr);
}

main().catch(console.error);
