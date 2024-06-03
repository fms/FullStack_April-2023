import { Request, Response, NextFunction } from "express";
import { getAllFilms, getFilmActors, getFilteredFilms, getFilteredFilmsJoinCategory, getFilteredFilmsJoinLanguage } from "../database/FilmsQueries";
import Film from "../database/Film";

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

export async function getFilteredWithLanguage(req: Request, res: Response, next: NextFunction) {
    try {
        const title = req.query.title as string || '';
        const description = req.query.description as string || '';
        const films = await getFilteredFilmsJoinLanguage(title, description);

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

export async function getFilteredWithCategory(req: Request, res: Response, next: NextFunction) {
    try {
        const title = req.query.title as string || '';
        const description = req.query.description as string || '';
        const films = await getFilteredFilmsJoinCategory(title, description);
    
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

export async function getActorsFromFilm(req: Request, res: Response, next: NextFunction) {
    try {
        const film_id = req.query.film_id as string || '';
        const id = parseInt(film_id);

        if (isNaN(id)) {
            return res.status(400).send({ error: 'Invalid film ID' });
        }
        
        const actors = await getFilmActors(id)

        if(actors.length === 0) {
            throw new Error ("Can't find actors");
        }

        return res.send({ actors });
    } 
    catch (error) {
        if (error instanceof Error) {
            return res.status(404).send({ error: error.message });
        }
    }
}