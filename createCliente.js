import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  "https://twpjrhkaohmmrtaztppk.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR3cGpyaGthb2htbXJ0YXp0cHBrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIyNjkzMDMsImV4cCI6MjA1Nzg0NTMwM30.FjmNZ3_P4CauPlAdbeexsLiFdPGwUbCZvRuZtuXVAEs"
);
