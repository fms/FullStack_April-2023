import createServer from "./server";
import { connectToDatabase,setDatabaseDefaults } from "./database";

const port = process.env.PORT || 3000;
const app = createServer();
connectToDatabase();
setDatabaseDefaults();

app.listen(port,() => console.log(`Server started on http://localhost:${port}`));