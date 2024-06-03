import { RowDataPacket } from "mysql2";

interface Actor extends RowDataPacket {
  actor_id: number;
  first_name: string;
  last_name: string;
  last_update: string;
}

export default Actor;
