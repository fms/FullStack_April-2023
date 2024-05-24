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

    const params = [`%${title}%`, `%${description}%`];

    const films = await runSelect<Film>(query, params);
    return films;
}