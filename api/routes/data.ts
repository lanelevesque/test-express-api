import { UUID } from "crypto";

export {};

const express = require("express");
const router = express.Router();
const supabase = require("../clients/supabaseClient");

router.get("/", async (req: any, res: any) => {
  const { data, error } = await supabase
    .from("igdb_games")
    .select("id, updated_at");
  res.send(data);
});

module.exports = router;
