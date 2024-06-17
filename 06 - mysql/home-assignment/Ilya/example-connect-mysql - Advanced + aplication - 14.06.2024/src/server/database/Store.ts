import { RowDataPacket } from "mysql2/promise";

export interface Store extends RowDataPacket {
  store_id: number;
  manager_staff_id: number;
  address_id: number;
  last_update: string;
}
