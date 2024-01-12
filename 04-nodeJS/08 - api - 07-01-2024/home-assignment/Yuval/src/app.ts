import express from 'express';
import tasksRouter from './routes/tasksRoutes';

const app = express();
const port = 3000;

app.use(express.static('public'));

app.use(express.json());

app.use("/api/tasks", tasksRouter);

app.use(globalErrorHandler);

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});

function globalErrorHandler(error: any, req: express.Request, res: express.Response, next: express.NextFunction) {
    if (error instanceof Error){
        res.statusMessage = error.message;
        res.status(500).send({ error: error.message });
    }
    else {
        res.status(500).send({ error });
    }
}