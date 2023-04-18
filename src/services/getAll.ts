import openDB from "../database/sqlite";
import { Database } from "sqlite";

//lista todos os nomes
async function getAll(): Promise<{ nome: string }> {
  try {
    const db: Database = await openDB();
    const result: { nome: string } = await db.get("SELECT nome FROM alunos");
    return result;
  } catch (error) {
    console.log(error);
  }
}

export default getAll;
