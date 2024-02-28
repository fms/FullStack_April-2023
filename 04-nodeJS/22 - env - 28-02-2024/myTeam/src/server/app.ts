import { connectToDatabase, setDatabaseDefaults } from './database';
import createServer from './server';
import ViteExpress from "vite-express";
import './process.env';

const port = process.env.PORT || 3000;
const app = createServer();

connectToDatabase();
setDatabaseDefaults();
ViteExpress.listen(app, port, () => console.log(`Server started on http://localhost:${port}`));