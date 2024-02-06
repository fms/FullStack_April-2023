import { connectToDatabase, setDatabaseDefaults } from './database';
import createServer from './server';
import mongoose from 'mongoose';

const port = process.env.PORT || 3000;
const app = createServer();

connectToDatabase();
setDatabaseDefaults();
app.listen(port, () => console.log(`Server started on http://localhost:${port}`));