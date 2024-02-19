import express from "express";
import { fileURLToPath } from "url";
import path from "path";
import DBConnect from "../databases/db.js";
import bookRouter from "./routers/books.router.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3005;

app.use(express.json());
app.use(express.static(path.resolve(__dirname, "../dist")));
app.use(bookRouter);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`Express server run: http://localhost:${PORT}`);
  DBConnect();
});