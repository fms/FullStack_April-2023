import Actor from "./Actor.js";
import { runSelect } from "./dbUtils.js";

export async function getAllActors() {
  return runSelect<Actor>("select * from actor");
}

export async function getActor(id: number) {
  const [actor] = await runSelect<Actor>("select * from actor where actor_id = ?", id);
  return actor;
}
