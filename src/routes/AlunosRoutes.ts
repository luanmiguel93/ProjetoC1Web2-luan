import { Router } from "express";
import AlunosController from "../controllers/AlunosController";
import { AuthMiddleware, ManagerMiddleware } from "../middlewares/AuthMiddleware";

const roteador = Router();

//rotas aluno
roteador.get(
  "/alunos",
  AuthMiddleware,
  ManagerMiddleware,
  AlunosController.getAlunos
);


roteador.post("/aluno", AlunosController.inserirAluno);

roteador.delete("/aluno", AlunosController.excluirAluno);

export default roteador;
