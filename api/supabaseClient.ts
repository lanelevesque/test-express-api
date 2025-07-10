import { createClient, SupabaseClient } from "@supabase/supabase-js";

const getEnv = (name: string): string => {
  if (typeof process.env[name] === "undefined") {
    throw new Error(`Variable ${name} undefined.`);
  }

  return process.env[name];
};

const supabase: SupabaseClient = createClient(
  getEnv("SUPABASE_URL"),
  getEnv("SUPABASE_KEY")
);

module.exports = supabase;
