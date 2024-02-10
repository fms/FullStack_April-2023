import express from 'express';
import tasksRouter from './routes/tasks';
import { globalHandleErrors } from './handlers/errorHandler';

export function createServer() {
    const app = express();

    app.use(express.json());
    app.use(express.static('public'));

    app.use('/api/tasks', tasksRouter);

    app.use(globalHandleErrors);
    return app;
}
export default createServer;