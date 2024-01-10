import express from 'express';
import tasksRouter from './routes/tasksRoutes';

const app = express();
const port = 3000;

app.use(express.static('public'));

app.use(express.json());

app.use("/api/tasks", tasksRouter);

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});