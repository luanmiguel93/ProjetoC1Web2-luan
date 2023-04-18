import { Router } from "express";
import BuildPath from "../utils/BuildPath";

const roteador = Router();

// rotas estaticas
roteador.get("/", async function (req, res) {
  res.sendFile(`${BuildPath(__dirname)}/views/index.html`);
});

roteador.get("*", async function (req, res) {
  res.sendFile(`${BuildPath(__dirname)}/views/404.html`);
});

export default roteador;
