import { Request, Response , NextFunction } from "express";
import { getAllFilms, setFilterdFilms } from "../database/filmsQueries";


export async function getFilms(req: Request, res: Response, next: NextFunction){
    const films = await getAllFilms();
    res.send(films);
}

export async function getFilterdFilms(req: Request, res: Response, next: NextFunction){
    try{
    let {title, description, language ,filmType} = req.query;
    if(title == undefined && description == undefined && language == undefined && filmType == undefined) {
        const allFilms = await getAllFilms()
        return res.send(allFilms);
    }

    if(title == undefined || description == undefined || language == undefined || filmType == undefined) {
        res.status(404).json("title/description/language/filmType is missing");
    }

    const films = await setFilterdFilms(`${title}`,`${description}`,`${language}`,`${filmType}`);
    
    console.log(req.query);
    
    res.send(films);
} catch(error){
    res.send(error);
}
}