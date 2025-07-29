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

module.exports = app;
