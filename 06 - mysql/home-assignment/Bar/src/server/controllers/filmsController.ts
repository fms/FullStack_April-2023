import { Request, Response, NextFunction } from "express";
import { getAllFilms, getFilmsByQuery } from "../database/filmsQueries";

export async function getFilms(req: Request, res: Response, next: NextFunction) {
  const films = await getAllFilms();
  return res.send({ films });
}

export async function getFilmsByTitle(req: Request, res: Response, next: NextFunction) {
  const title = req.query.title as string | undefined;

  if (!title) {
    return res.status(400).json({ error: "Missing title query parameter" });
  }

  const films = await getFilmsByQuery(title);
  res.json({ films });
}
