import Film from "./Film";
import { runModify, runSelect } from "./dbUtils";

export async function getAllFilms() {
    return runSelect<Film>("SELECT * FROM film");
}

export async function getFilteredFilms(title: string, description: string) {
    const query = `
        SELECT *
        FROM film
        WHERE title LIKE ? AND description LIKE ?
    `;

    const query1 = `
        SELECT film.*, language.name as language_name
        FROM film
        JOIN language ON film.language_id = language.language_id
        WHERE film.title LIKE ? AND film.description LIKE ?
    `;

    const query2 = `
        SELECT film.*, category.name as category_name
        FROM film
        Join film_category ON film.film_id = film_category.film_id
        Join category ON film_category.category_id = category.category_id
        WHERE film.title LIKE ? AND film.description LIKE ?
    `;

    const params = [`%${title}%`, `%${description}%`];

    const films = await runSelect<Film>(query2, params);
    return films;
}

export async function getFilmActors(film_id: number) {
    const query = `
        SELECT * 
        FROM actor
        WHERE actor_id IN
        (SELECT actor_id 
            FROM film_actor 
            WHERE film_id = ?)
    `;

    const params = [film_id];

    const actors = await runSelect<Film>(query, params);
    return actors;
}