import { open, Database } from "sqlite";
import sqlite3 from "sqlite3";
//import { sqlite3 } from "sqlite3";

//criando conexao com o banco
async function openDB(): Promise<Database> {
  return open({
    filename: "./src/database/database.db",
    driver: sqlite3.Database,
  });
}

export default openDB;
