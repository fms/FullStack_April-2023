import { createServer } from "./server";
import { setDataBaseDefaults, connectToDatabase } from "./database";

const port = process.env.PORT || 3000;
const app = createServer();
connectToDatabase();
setDataBaseDefaults();

app.listen(port, () =>
  console.log(`Server is now live on port http://localhost:${port}`)
);
