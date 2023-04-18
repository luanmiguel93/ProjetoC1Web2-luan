import { getAll } from "../execQuery";

async function listarAlunos(): Promise<{ nome: string }[]> {
  try {
    const result: { nome: string }[] = await getAll("SELECT nome FROM alunos");
    return result;
  } catch (error) {
    console.log(error);
  }
}

export default listarAlunos;
