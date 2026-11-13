const SUPABASE_URL = "https://czvcosgkawgwfpymgqvp.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6dmNvc2drYXdnd2ZweW1ncXZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTQ0OTY2MzksImV4cCI6MjExMDA3MjYzOX0.4uVxA3ZMAGGnH-1_jp8AkpaOkuk5Hv2C8SpTuU0k5eU";

const db = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);