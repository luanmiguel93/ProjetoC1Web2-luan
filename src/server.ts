import dotenv from 'dotenv';

import express from 'express';
import roteadorAlunos from "./routes/AlunosRoutes";
import roteadorStatic from "./routes/StaticRoutes";

//dotenv ambiente
dotenv.config({
  path: process.env.NODE_ENV === "dev" ? ".env.dev" : ".env",
});

//dotenv
const port: number = Number(process.env.PORT);
const app: express.Application = express();

//pastas publicas
app.use(express.json());
app.use("/public", express.static(`${__dirname}/public`));

//rotas
app.use(roteadorAlunos);
app.use(roteadorStatic);

//status server
app.listen(port, function () {
  console.log(`Servidor funcionando na porta ${port}`);
});
