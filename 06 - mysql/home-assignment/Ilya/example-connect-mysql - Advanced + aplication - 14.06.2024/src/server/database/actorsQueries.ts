import Actor from "./Actor";
import { runModify, runSelect } from "./dbUtils";

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
