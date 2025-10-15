import sqlite3 from "sqlite3";
import { open } from "sqlite";

export const openDb = async () => {
  return open({
    filename: "./database.db",
    driver: sqlite3.Database,
  });
};

// Crear tabla de usuarios si no existe
const init = async () => {
  const db = await openDb();
  await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      email TEXT UNIQUE,
      password TEXT
    )
  `);
};

init();
