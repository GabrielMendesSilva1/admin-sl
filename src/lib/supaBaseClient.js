import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tursmuzgkwlaqojdvkxk.supabase.co';
const supabaseKey = 
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR1cnNtdXpna3dsYXFvamR2a3hrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDczMjc5NzQsImV4cCI6MjA2MjkwMzk3NH0.2dT_WFLmf1yOEuwpiZ6GrtK7EJM-Ff1TMRCzH5CSeNE';

export const supabase = createClient(supabaseUrl, supabaseKey);
