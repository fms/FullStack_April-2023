import { RowDataPacket } from "mysql2";

interface Film extends RowDataPacket {
    film_id: number;
    title: string;
    description: string;
    release_year: number;
    language_id: number;
    original_language_id: number | null;
    rental_duration: number;
    rental_rate: string;
    length: number;
    replacement_cost: string;
    rating: string;
    special_features: string;
    last_update: string;
}

export default Film;