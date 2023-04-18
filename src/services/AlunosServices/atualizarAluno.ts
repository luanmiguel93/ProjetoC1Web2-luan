import {execQuery} from "../execQuery";

//atualizar alunos
async function atualizarAluno(aluno: { nome: string; novoNome: string }): Promise<void> {
  try {
    const resultado = await execQuery(
      `UPDATE alunos SET nome = '${aluno.novoNome}' WHERE nome = '${aluno.nome}'`
    );
  } catch (erro) {
    console.log(erro);
  }
}

export default atualizarAluno;
