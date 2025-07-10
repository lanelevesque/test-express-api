export {};

const express = require("express");
const router = express.Router();

router.get("/", (req: any, res: any) => {
  res.send("this is the users router.");
});

router.get("/:userId", (req: any, res: any) => {
  res.send(req.params.userId);
});

module.exports = router;
