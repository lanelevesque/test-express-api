import { UUID } from "crypto";

export {};

const express = require("express");
const router = express.Router();
const supabase = require("../supabaseClient");

router.get("/", (req: any, res: any) => {
  res.send("this is the products router.");
});

router.get("/:productId", async (req: any, res: any) => {
  const productId: UUID = req.params.productId;
  const { data, error } = await supabase
    .from("products")
    .select()
    .eq("id", productId);
  res.send(data);
});

module.exports = router;
