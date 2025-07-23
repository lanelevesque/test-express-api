import { UUID } from "crypto";

export {};

const express = require("express");
const router = express.Router();
const supabase = require("../clients/supabaseClient");

router.get("/", (req: any, res: any) => {
  res.send("this is the search router.");
});

router.get("/:userId", async (req: any, res: any) => {
  const userId: UUID = req.params.userId;
  const { data, error } = await supabase
    .from("games")
    .select()
    .eq("user_id", userId);
  res.send(data);
});

module.exports = router;
