import express from 'express';
import router from './routes/queues';
import { globalHandleErrors } from './handlers/errorHandler';

export function createServer() {
    const app = express();

    app.use(express.json());
    app.use(express.static('public'));

    app.use('/api/queues', router);

    app.use(globalHandleErrors);
    return app;
}
export default createServer;