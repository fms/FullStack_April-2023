import { Request, Response, NextFunction } from "express";
import { getAllFilms, getFilteredFilms } from "../database/filmsQueries";

export async function getAll(req: Request, res: Response, next: NextFunction) {
  const films = await getAllFilms();
  return res.send({ films });
}

export async function getFiltered(req: Request, res: Response, next: NextFunction) {
    const title = req.query.title as string;
    const description = req.query.description as string;
    const films = await getFilteredFilms(title, description);
    return res.send({ films });
  }