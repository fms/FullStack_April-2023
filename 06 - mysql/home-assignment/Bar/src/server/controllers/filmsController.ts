import { Request, Response, NextFunction } from "express";
import { getAllFilms, getFilmsByQuery } from "../database/filmsQueries";

export async function getFilms(req: Request, res: Response, next: NextFunction) {
  const films = await getAllFilms();
  return res.send({ films });
}

export async function getFilmsByDetails(req: Request, res: Response, next: NextFunction) {
  const { title, description, language, category } = req.query;

  if (!title && !description && !language && !category) {
    return res.status(400).json({ error: "Missing title/description/language/category query parameter" });
  }

  const films = await getFilmsByQuery(title, description, language, category);

  res.json({ films });
}
