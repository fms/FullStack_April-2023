import { Request, Response, NextFunction } from "express";
import { getActorsFromFilm } from "../database/filmActorsQueries";

export async function getActorsByFilmId(req: Request, res: Response, next: NextFunction) {
    const filmName = req.query.filmName as string | undefined;

    if (!filmName) {
        return res.status(400).send({ error: "Film name is required" });
    }

    try {
        const actors = await getActorsFromFilm(filmName);
        return res.send(actors);
    } catch (error) {
        next(error);
    }
}