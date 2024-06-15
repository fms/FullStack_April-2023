import { RowDataPacket } from "mysql2";
import { runSelect } from "./dbUtils";

interface FilmActor extends RowDataPacket {
  film_id: number;
  actor_id: number;
}

export async function getActorsForFilm(filmId: number) {
  return runSelect<FilmActor>("select a.actor_id, a.first_name, a.last_name from film_actor fa inner join actor a on fa.actor_id = a.actor_id where fa.film_id =?", filmId);
}