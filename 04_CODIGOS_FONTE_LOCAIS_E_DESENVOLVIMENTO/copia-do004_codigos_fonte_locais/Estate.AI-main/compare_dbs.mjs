import { createClient } from '@supabase/supabase-js';

const url1 = 'https://ldfcqxeehgaftxsgxkag.supabase.co';
const key1 = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxkZmNxeGVlaGdhZnR4c2d4a2FnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MjQ4MDQyMywiZXhwIjoyMDg4MDU2NDIzfQ.KfaCh5JYefV5kVlZeRg-cg_-4QELo8vhDK5TqpShuNY';

const url2 = 'https://ptochsyoyatsydfysacc.supabase.co';
const key2 = 'sb_publishable_zq8HQVH9RpICHx4gSzQTjw_Jl_jbSWy';

async function main() {
  console.log("=== DB 1 (ldfcqxeehgaftxsgxkag) ===");
  const sb1 = createClient(url1, key1);
  const { data: s1 } = await sb1.from('whatsapp_sessions').select('*');
  console.log("Sessions DB1:", s1);

  console.log("\n=== DB 2 (ptochsyoyatsydfysacc) ===");
  const sb2 = createClient(url2, key2);
  const { data: s2, error: e2 } = await sb2.from('whatsapp_sessions').select('*');
  console.log("Sessions DB2:", s2, "Error:", e2);
}

main().catch(console.error);
