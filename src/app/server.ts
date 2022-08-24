import express from "express";
import DbConnecton from "../domain/repositories/connection";
import { router } from "./router";

import "dotenv/config";

const app = express();

app.use(express.json());
app.use(router);

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`);
  DbConnecton.connection();
});
