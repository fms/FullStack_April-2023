import { runSelect,runModify } from "./dbUtils";
import Films from '../models/Films';

export async function getAllFilms(){
    return runSelect<Films>("SELECT * FROM film")
}

export async function setFilterdFilms(title :string, description :string, language :string ,filmType :string){
    return runSelect<Films>(
        "SELECT * FROM film f LEFT JOIN language l ON f.language_id = l.language_id LEFT JOIN film_category fc ON f.film_id = fc.film_id LEFT JOIN category c ON fc.category_id = c.category_id WHERE title LIKE ? AND description LIKE ? AND l.name LIKE ? AND c.name LIKE ?"
        ,[title ,description ,language ,filmType])
}