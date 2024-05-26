import { Request, Response, NextFunction } from "express";
import { getAllFilms, getFilmsByQuery } from "../database/filmsQueries";

export async function getFilms(req: Request, res: Response, next: NextFunction) {
  const films = await getAllFilms();
  return res.send({ films });
}

export async function getFilmsByDetails(req: Request, res: Response, next: NextFunction) {
  const title = req.query.title as string | undefined;
  const description = req.query.description as string | undefined;

  if (!title && !description) {
    return res.status(400).json({ error: "Missing title or description query parameter" });
  }

  const films = await getFilmsByQuery(title, description);
  
  res.json({ films });
}
