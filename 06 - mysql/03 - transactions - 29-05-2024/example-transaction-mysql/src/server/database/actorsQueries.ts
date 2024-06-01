import { PoolConnection } from "mysql2/promise";
import Actor from "./Actor.js";
import pool from "./connection.js";
import { runModify, runSelect, transactionModify } from "./dbUtils";

export async function getAllActors() {
  return runSelect<Actor>("select * from actor");
}

export async function getActor(id: number) {
  const [actor] = await runSelect<Actor>("select * from actor where actor_id = ?", id);
  return actor;
}

export async function insertActor(first_name: string, last_name: string) {
  const result = await runModify("insert into actor (first_name, last_name) values (?, ?)", [first_name, last_name]);
  return result;
}

export async function insertActors(actors: Actor[]) {
  let connection: PoolConnection | null = null;
  try {
    // Get a dedicated connection for us. We don't want to accidentally change connections in the middle of the transaction
    connection = await pool.getConnection();
    if (!connection) {
      throw new Error("Can't get connection from pool");
    }

    // Start the transaction
    await connection.beginTransaction();

    // Iterate over the payload
    for (const actor of actors) {
      const { first_name, last_name } = actor;
      // console.log(`will add: ${first_name}, ${last_name}`);
      const result = await transactionModify(connection, "insert into actor (first_name, last_name) values (?, ?)", [
        first_name,
        last_name,
      ]);
      // console.log(result);
    }

    // Everything was inserted successfully, commit the changes.
    await connection.commit();
    return actors.length;
  } catch (error) {
    if (error instanceof Error) {
      console.log(`error while inserting rows: ${error.message}`);
    }
    if (connection) {
      // Get rid of any pending changes
      await connection.rollback();
    }
    return 0;
  } finally {
    if (connection) {
      // Don't forget to release the connection back to the pool
      connection.release();
    }
  }
}

export async function deleteById(id: number) {
  const result = await runModify("delete from actor where actor_id = ?", [id]);
  return result;
}

export async function updateById(id: number, fields: object) {
  const binds: any[] = [];
  const updates: string[] = [];

  if ("first_name" in fields) {
    updates.push("first_name = ?");
    binds.push(fields.first_name);
  }

  if ("last_name" in fields) {
    updates.push("last_name = ? ");
    binds.push(fields.last_name);
  }

  if (updates.length == 0) {
    throw new Error("didn't get first_name or last_name");
  }

  binds.push(id);
  const result = await runModify(`update actor set ${updates.join(",")} where actor_id = ?`, binds);
  return result;
}
