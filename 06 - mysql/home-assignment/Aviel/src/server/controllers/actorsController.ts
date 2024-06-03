import { Request, Response, NextFunction } from "express";
import { getActor, getAllActors, insertActor, deleteById, updateById, getActorsFilm } from "../database/actorsQueries";

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

export async function createActor(req: Request, res: Response, next: NextFunction) {
  const { first_name, last_name } = req.body;

  // TODO: Add validation to check the fields exist and conform to restrictions
  const result = await insertActor(first_name, last_name);
  const actor = await getActor(result.insertId);
  //   req.params.id = result.insertId.toString();
  return res.send({ actor });
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

export async function getActorsByFilm(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;

  if (!id || isNaN(Number(id))) {
    return res.status(400).json({ error: "Invalid movie ID parameter" });
  }

  const actors = await getActorsFilm(id);
  return res.send({ actors });
}
