import { dbUtils, dbActors, dbStores } from "./database/index.js";

async function insertActor(first_name: string, last_name: string) {
  const result = await dbUtils.runModify("insert into actor (first_name, last_name) values (?, ? )", [
    first_name,
    last_name,
  ]);
  console.log(result);
  return await dbActors.getActor(result.insertId);
}

const newActor = await insertActor("Yuval", "Lavi");
console.dir(newActor);

const actors = await dbActors.getAllActors();
console.log(actors[0].first_name);

const actor = await dbActors.getActor(1);
console.log(actor.first_name);
console.log(actor.last_update);

console.log();

actors.map((actor) => console.log(actor.last_name));

const stores = await dbStores.getAllStores();
console.table(stores);

// console.log(actors);

// const allActors = await getAllActors();

// const yuvals = allActors.filter((actor) => actor.first_name == "Yuval" && actor.last_name = "Lavi");

// yuvals.forEach((yuval) => deleteActor(yuval.actor_id));
