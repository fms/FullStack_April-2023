import express from "express";
import ViteExpress from "vite-express";
import actorRouter from "./routes/actorRoute";
import filmRouter from './routes/filmRoute';
import filmActorRouter from './routes/filmActorsRoute';
const app = express();
app.use(express.json());


app.use('/api/actors',actorRouter);
app.use('/api/films',filmRouter);
app.use('/api/filmActors',filmActorRouter);

ViteExpress.listen(app, 3000, () => console.log("Server is listening on port 3000..."));
