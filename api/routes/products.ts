export {};

const express = require("express");
const router = express.Router();

router.get("/", (req: any, res: any) => {
  res.send("this is the products router.");
});

router.get("/:productId", (req: any, res: any) => {
  res.send(req.params.productId);
});

module.exports = router;
