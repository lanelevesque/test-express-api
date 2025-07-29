const express = require("express");
const app = express();

const usersRouter = require("./routes/users");
const productsRouter = require("./routes/products");
const gamesRouter = require("./routes/games");
const dataRouter = require("./routes/data");

app.use("/users", usersRouter);
app.use("/products", productsRouter);
app.use("/games", gamesRouter);
app.use("/data", dataRouter);

app.get("/", (req: any, res: any) => res.send("Express on Vercel!"));

app.listen(3000, () => {
  console.log("Listing on port 3000");
});

app.getEnv = (name: string): string => {
  if (typeof process.env[name] === "undefined") {
    throw new Error(`Variable ${name} undefined.`);
  }

  return process.env[name];
};

module.exports = app;
