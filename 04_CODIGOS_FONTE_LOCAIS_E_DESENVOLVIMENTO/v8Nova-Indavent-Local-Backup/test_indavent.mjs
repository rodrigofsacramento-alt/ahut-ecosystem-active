import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ldfcqxeehgaftxsgxkag.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxkZmNxeGVlaGdhZnR4c2d4a2FnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MjQ4MDQyMywiZXhwIjoyMDg4MDU2NDIzfQ.KfaCh5JYefV5kVlZeRg-cg_-4QELo8vhDK5TqpShuNY';

const supabase = createClient(supabaseUrl, supabaseKey);

async function test() {
  console.log("Testing Indavent Supabase connection...");
  const { data, error } = await supabase.from('leads').select('id').limit(1);
  if (error) {
    console.error("ERROR:", error.message);
  } else {
    console.log("SUCCESS! Got data:", data);
  }
}

test();
