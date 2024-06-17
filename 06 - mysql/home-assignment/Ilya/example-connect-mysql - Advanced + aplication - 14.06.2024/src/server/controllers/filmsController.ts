import { Request, Response, NextFunction } from "express";
import { getAllFilms, getFilteredFilms } from "../database/filmsQueries";
import { getActorsForFilm } from "../database/filmActorsQueries";


export async function getAll(req: Request, res: Response, next: NextFunction) {
  try {
    const films = await getAllFilms();
    const filmList = [];
    for (const film of films) {
      const actorNames = await getActorsForFilm(film.film_id);
      filmList.push({...film, actorNames });
    }
    res.json(filmList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error getting all films" });
  }
}

export async function getFiltered(req: Request, res: Response, next: NextFunction) {
  const title = req.query.title as string | undefined;
  const description = req.query.description as string | undefined;
  try {
    const films = await getFilteredFilms(title || "", description || "");
    res.json(films);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error getting filtered films" });
  }
}

export async function getFilmActors(req: Request, res: Response, next: NextFunction) {
  const filmId = parseInt(req.params.filmId, 10);
  if (isNaN(filmId)) {
    res.status(400).json({ message: "Invalid film ID" });
    return;
  }
  try {
    const actors = await getActorsForFilm(filmId);
    res.json(actors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error getting film actors" });
  }
}

