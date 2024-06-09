import { RowDataPacket } from "mysql2";
import { runSelect } from "./dbUtils";
import { getActorsForFilm } from "./filmActorsQueries";

interface Film extends RowDataPacket {
  film_id: number;
  title: string;
  description: string;
  // ... other columns ...
}

export async function getAllFilms() {
  return runSelect<Film>("select * from film");
}

export async function getFilteredFilms(title: string, description: string) {
    console.log(`Filtering films by title=${title} and description=${description}`);
  
    let query = "select * from film where ";
    const binds: any[] = [];
  
    let hasConditions = false;
  
    if (title) {
      query += "title like ? ";
      binds.push(`%${title}%`);
      hasConditions = true;
    }
  
    if (description) {
      if (hasConditions) {
        query += "and ";
      }
      query += "description like ? ";
      binds.push(`%${description}%`);
      hasConditions = true;
    }
  
    console.log(`Generated query: ${query}`);
    console.log(`Bind parameters: ${binds}`);
  
    if (!hasConditions) {
      return []; // or throw an error, depending on your requirements
    }
  
    const result = await runSelect<Film>(query, binds);
    console.log(`Result: ${result}`);

    }
    export async function getFilmDetails(filmId: number) {
      const film = await runSelect<Film>("select * from film where film_id =?", filmId);
      if (!film) {
        throw new Error(`Film not found with ID ${filmId}`);
      }
      const actors = await getActorsForFilm(filmId);
      return {...film, actors };
    }