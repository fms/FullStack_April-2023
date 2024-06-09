import { Request, Response, NextFunction } from "express";
import { getActor, getAllActors, insertActor, deleteById, updateById, insertActors } from "../database/actorsQueries";
import Actor from "../database/Actor";

export async function getAll(req: Request, res: Response, next: NextFunction) {
  const actors = await getAllActors();
  return res.send({ actors });
}

export async function getById(req: Request, res: Response, next: NextFunction) {
  try {
    // Of course, we absolutely need to add validation on the parameter
    const { id } = req.params;
    const num = Number.parseInt(id, 10);

    const actor = await getActor(num);
    if (!actor) {
      throw new Error("No actor for this ID");
    }

    return res.send({ actor });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(404).send({ error: error.message });
    }
  }
}

export async function createActors(req: Request, res: Response, next: NextFunction) {
  // console.log(req.body);
  const rowCount = await insertActors(req.body);

  // const actors: Actor[] = req.body;
  //
  // TODO: Add validation to check the fields exist and conform to restrictions
  // const result = await insertActor(first_name, last_name);
  // const actor = await getActor(result.insertId);
  //   req.params.id = result.insertId.toString();
  return res.send({ ok: rowCount != 0, inserted: rowCount });
  //   next();
}

export async function deleteActor(req: Request, res: Response, next: NextFunction) {
  try {
    // TODO: Validation
    const { id } = req.params;
    const num = Number.parseInt(id, 10);
    const result = await deleteById(num);
    if (result.affectedRows == 0) {
      throw new Error("No actor for this ID");
    }
    return res.send({ result });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(404).send({ error: error.message });
    }
  }
}

export async function updateActor(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;
  const num = Number.parseInt(id, 10);

  const result = await updateById(num, req.body);
  return res.send({ result });
}
