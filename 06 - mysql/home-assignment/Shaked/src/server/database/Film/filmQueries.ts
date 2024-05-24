import Film from "./FilmInterface";
import { runSelect } from "../dbUtils";
import Actor from "../Actor";

export async function getAllfilms() {
  return runSelect<Film>("SELECT * FROM sakila.film");
}

export async function getFilteredFilmList(title: string, description: string) {
  let query = `
  SELECT film.film_id, film.title, film.description, language.name as language, category.name as category
  FROM sakila.film
  JOIN sakila.language ON film.language_id = language.language_id
  JOIN sakila.film_category ON film.film_id = film_category.film_id
  JOIN sakila.category ON film_category.category_id = category.category_id
  WHERE 1=1`;
  const params: (string | number)[] = [];

  if (title) {
    query += " AND title LIKE ?";
    params.push(`%${title}%`);
  }

  if (description) {
    query += " AND description LIKE ?";
    params.push(`%${description}%`);
  }

  return runSelect<Film>(query, params);
}

export async function getActorsByFilmId(filmId: number) {
  return runSelect<Actor>(`
  SELECT *
  FROM sakila.actor
  WHERE actor_id IN (SELECT actor_id
  FROM sakila.film_actor
  WHERE film_id = ?)
  `, [filmId]);
}

export async function getFilm(id: number) {
  const [film] = await runSelect<Film>("SELECT * FROM sakila.film WHERE film_id = ?", id);
  return film;
}

