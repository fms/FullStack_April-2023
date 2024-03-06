import express from 'express';
import router from './routes/queues';
import userRouter from './routes/users';
import { globalHandleErrors } from './handlers/errorHandler';
import cookieParser from "cookie-parser";

export function createServer() {
    const app = express();
    app.use(cookieParser());
    app.use(express.json());
    app.use(express.static('public'));
    app.use(globalHandleErrors);

    app.use('/api/queues', router);
    app.use('/api/user', userRouter);
    return app;
}
