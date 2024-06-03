import { runSelect } from "./dbUtils";
import Film from "./Film";

export async function getAllFilms() {
  return runSelect<Film>("select * from film");
}

export async function getFilmsByQuery(title: any, description: any, language: any, category: any) {
  let query = `SELECT * FROM film 
              LEFT JOIN film_category ON film.film_id = film_category.film_id
              LEFT JOIN category ON film_category.category_id = category.category_id
              LEFT JOIN language ON film.language_id = language.language_id 
              WHERE (film.title = ? AND film.description = ? AND language.name = ? AND category.name = ?)`;
  const params = [title, description, language, category];

  return runSelect<Film>(query, params);
}
