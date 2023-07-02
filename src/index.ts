import "express-async-errors";
import express, { json } from "express";
import dotenv from "dotenv";
import router from "@/routers/films-router";

dotenv.config();
const app = express();
app.use(json());
app.use(router);

const port: number = parseInt(process.env.PORT) || 5000;
app.listen(port, () => {
  console.log(`Serve is up and running on port ${port}`);
});
