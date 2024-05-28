import { runSelect } from "./dbUtils";
import Film from "./Film";

export async function getAllFilms() {
  return runSelect<Film>("select * from film");
}

export async function getFilmsByQuery(title: any, description: any, language: any, category: any) {
  let query = `SELECT * FROM film 
               JOIN film_category ON film.film_id = film_category.film_id
               JOIN category ON film_category.category_id = category.category_id
               JOIN language ON film.language_id = language.language_id 
               WHERE language.name = ? AND category.name = ?`;
  const params = [language, category];

  if (title || description) {
    query += " AND (film.title = ? OR film.description = ?)";
    params.push(title, description);
  }

  return runSelect<Film>(query, params);
}
