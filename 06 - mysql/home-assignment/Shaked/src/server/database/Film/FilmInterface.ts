import { RowDataPacket } from "mysql2";

interface Film extends RowDataPacket {
  film_id: number;
  title: string;
  description: string;
}

export default Film;
