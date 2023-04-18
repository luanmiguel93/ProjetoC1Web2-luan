import {execQuery} from "../execQuery";

async function inserirAluno(aluno: { nome: string }): Promise<void> {
  try {
    const resultado = await execQuery(
      `INSERT into alunos VALUES ('${aluno.nome}')`
    );
  } catch (erro) {
    console.log(erro);
  }
}

export default inserirAluno;
