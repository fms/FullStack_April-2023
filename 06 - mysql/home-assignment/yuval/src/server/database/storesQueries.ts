import { Store } from "./Store.js";
import { runSelect } from "./dbUtils.js";

export async function getAllStores() {
  return runSelect<Store>("select * from store;");
}
