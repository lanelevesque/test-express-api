import { createClient } from "@supabase/supabase-js";

const express = require("express");
const app = express();

const getEnv = (name: string): string => {
  if (typeof process.env[name] === "undefined") {
    throw new Error(`Variable ${name} undefined.`);
  }

  return process.env[name];
};

const supabase = createClient(getEnv("SUPABASE_URL"), getEnv("SUPABASE_KEY"));

const usersRouter = require("./routes/users");
const productsRouter = require("./routes/products");

app.use("/users", usersRouter);
app.use("/products", productsRouter);

app.get("/", (req: any, res: any) => res.send("Express on Vercel!"));

app.listen(3000, () => {
  console.log("Listing on port 3000");
});

module.exports = { app, supabase };
