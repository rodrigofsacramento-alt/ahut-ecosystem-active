import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://ldfcqxeehgaftxsgxkag.supabase.co";
const SUPABASE_SERVICE_ROLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxkZmNxeGVlaGdhZnR4c2d4a2FnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MjQ4MDQyMywiZXhwIjoyMDg4MDU2NDIzfQ.KfaCh5JYefV5kVlZeRg-cg_-4QELo8vhDK5TqpShuNY";

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

async function main() {
  // Test common parameter signatures
  const signatures = [
    { p_conversation_id: '2f68bda7-3d63-4e28-abfc-7047198f341d', p_content: 'test' },
    { conversation_id: '2f68bda7-3d63-4e28-abfc-7047198f341d', content: 'test' },
    { p_conv_id: '2f68bda7-3d63-4e28-abfc-7047198f341d', p_message: 'test' },
    { p_conversation_id: '2f68bda7-3d63-4e28-abfc-7047198f341d', p_content: 'test', p_user_id: 'b82e5848-e0f5-4d57-a9cc-61d9f416e741' },
  ];

  for (const sig of signatures) {
    const res = await supabase.rpc('send_whatsapp_message', sig);
    console.log("Sig:", Object.keys(sig), "=> result:", res.data, "error:", res.error?.message);
  }
}

main().catch(console.error);
