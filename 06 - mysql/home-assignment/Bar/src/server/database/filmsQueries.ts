import { runSelect } from "./dbUtils";
import Film from "./Film";

export async function getAllFilms() {
  return runSelect<Film>("select * from film");
}

export async function getFilmsByQuery(query: string | undefined) {
  return runSelect<Film>("select * from film where title = ?", query);
}
