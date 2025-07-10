import { createClient } from "@supabase/supabase-js";

const express = require("express");
const app = express();

// const supabase = createClient(
//   process.env.SUPABASE_URL,
//   process.env.SUPABASE_KEY
// );

const usersRouter = require("./routes/users");
const productsRouter = require("./routes/products");

app.use("/users", usersRouter);
app.use("/products", productsRouter);

app.get("/", (req: any, res: any) => res.send(process.env.SUPABASE_URL));

app.listen(3000, () => {
  console.log("Listing on port 3000");
});

module.exports = app;
