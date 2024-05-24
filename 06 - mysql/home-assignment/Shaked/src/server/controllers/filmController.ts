import { Request, Response, NextFunction } from "express";
import { getAllfilms, getFilm, getFilteredFilmList } from "../database/Film/filmQueries";
import { getActorsByFilmId } from "../database/Film/filmQueries";

export async function getAll(req: Request, res: Response, next: NextFunction) {
  const films = await getAllfilms();
  return res.send({ films });
}

export async function getFilteredList(req: Request, res: Response, next: NextFunction) {
  const { title, description } = req.query;
  const films = await getFilteredFilmList(title as string, description as string);
  return res.send({ films });
}


export async function getActors(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    const num = Number.parseInt(id, 10);

    const actors = await getActorsByFilmId(num);
    return res.send({ actors });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(404).send({ error: error.message });
    }
  }
}


export async function getById(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    const num = Number.parseInt(id, 10);

    const film = await getFilm(num);
    if (!film) {
      throw new Error("No film for this ID");
    }

    return res.send({ film });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(404).send({ error: error.message });
    }
  }
}
