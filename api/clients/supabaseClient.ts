import { createClient, SupabaseClient } from "@supabase/supabase-js";

const getEnv = require("../utils");

const supabase: SupabaseClient = createClient(
  getEnv("SUPABASE_URL"),
  getEnv("SUPABASE_KEY")
);

module.exports = supabase;
