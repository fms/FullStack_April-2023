import { ResultSetHeader } from "mysql2";
import pool from "./connection.js";

export async function runSelect<T>(query: string, params?: any): Promise<Partial<T>[]> {
  const [results] = await pool.query(query, params);
  return results as T[];
}

export async function runModify<T>(query: string, params?: any): Promise<ResultSetHeader> {
  const [results] = await pool.execute(query, params);
  return results as ResultSetHeader;
}
