import { connectToDatabase, setDatabaseDefaults } from './database';
import createServer from './server';
import ViteExpress from "vite-express";
// import mongoose from 'mongoose';

const port = process.env.PORT || 3000;
const app = createServer();

connectToDatabase();
setDatabaseDefaults();
ViteExpress.listen(app, 3000, () =>
    console.log("Server is listening on port 3000..."),
);

// app.listen(port, () => console.log(`Server started on http://localhost:${port}`));

