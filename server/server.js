import cors from "cors";
import express from "express";
import { handleLogin } from "./auth.js";
import knex from "./lib/db.js";

const { schema } = knex;

const PORT = 4020;

const app = express();

app.use(
  cors({
    origin: ["http://localhost:4020"],
  }),
  express.json()
);
app.post("/login", handleLogin);

app.listen({ port: PORT }, () => {
  console.log(`Express aslaa http://localhost:${PORT}`);
});
