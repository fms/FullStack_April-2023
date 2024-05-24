import { Request, Response, NextFunction } from "express";
import { getAllFilms, getFilteredFilms } from "../database/FilmsQueries";

export async function getAll(req: Request, res: Response, next: NextFunction) {
    const films = await getAllFilms();
    return res.send({ films });
}

export async function getFiltered(req: Request, res: Response, next: NextFunction) {
    try {
        const title = req.query.title as string || '';
        const description = req.query.description as string || '';
        const films = await getFilteredFilms(title, description);
    
        if(films.length == 0) {
            throw new Error("Can't find films");
        }

        return res.send({ films });
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(404).send({ error: error.message });
        }
    }
}