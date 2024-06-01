import FilmActor from "../models/FilmActor";
import { runModify, runSelect } from "./dbUtils";

export async function getActorsFromFilm(filmName: string){
    return runSelect<FilmActor>("SELECT * FROM sakila.actor WHERE actor_id IN (SELECT actor_id FROM sakila.film_actor WHERE film_id IN(SELECT film_id FROM sakila.film WHERE title = ?));", filmName)
}