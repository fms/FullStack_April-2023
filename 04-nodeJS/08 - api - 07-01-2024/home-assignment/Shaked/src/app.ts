import express, { NextFunction } from 'express';
import tasksRouter from './routes/tasks';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

app.use('/api/tasks', tasksRouter);

app.use(globalHandleErrors);
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
})

export function globalHandleErrors(error: any, req: express.Request, res: express.Response, next: NextFunction) {
    if (error instanceof Error) {
        res.statusMessage = error.message;
        res.status(500).send({ error: error.message })
    } else {
        res.status(500).send({ error });
    }
    next();
}