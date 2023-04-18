import { execQuery } from "../execQuery";

//deletar alunos
async function deletarAluno(aluno: { nome: string }): Promise<void> {
  try {
    const resultado = await execQuery(
      `DELETE FROM alunos WHERE alunos.nome = '${aluno.nome}'`
    );
  } catch (erro) {
    console.log(erro);
  }
}

export default deletarAluno;
