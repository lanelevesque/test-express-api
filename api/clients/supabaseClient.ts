import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabase: SupabaseClient = createClient(
  app.getEnv("SUPABASE_URL"),
  app.getEnv("SUPABASE_KEY")
);

module.exports = supabase;
