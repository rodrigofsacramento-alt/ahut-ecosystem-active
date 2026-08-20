import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://ldfcqxeehgaftxsgxkag.supabase.co";
const SUPABASE_SERVICE_ROLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxkZmNxeGVlaGdhZnR4c2d4a2FnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MjQ4MDQyMywiZXhwIjoyMDg4MDU2NDIzfQ.KfaCh5JYefV5kVlZeRg-cg_-4QELo8vhDK5TqpShuNY";

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

async function main() {
  console.log("=== Updating is_group for all group contacts in whatsapp_contacts ===");
  const { data: updatedContacts, error: uErr } = await supabase
    .from('whatsapp_contacts')
    .update({ is_group: true })
    .ilike('remote_jid', '%@g.us%')
    .select('id, remote_jid, name, is_group, conversation_id');
  
  if (uErr) console.error("Error updating whatsapp_contacts:", uErr);
  else console.log("Updated group contacts:", updatedContacts);

  // Also check if any whatsapp_contacts have phone_number ending in @g.us or long group phone
  const { data: allContacts } = await supabase
    .from('whatsapp_contacts')
    .select('id, remote_jid, phone_number, name, is_group, conversation_id, profile_id');
  
  for (const c of allContacts || []) {
    if (c.remote_jid?.endsWith('@g.us') || (c.phone_number && c.phone_number.length > 15 && !c.phone_number.startsWith('55'))) {
      if (!c.is_group) {
        await supabase.from('whatsapp_contacts').update({ is_group: true }).eq('id', c.id);
        console.log(`Set is_group=true for ${c.name} (${c.remote_jid})`);
      }
    }
  }

  // Create send_whatsapp_message RPC in Supabase if possible, or verify
  console.log("Database update completed.");
}

main().catch(console.error);
