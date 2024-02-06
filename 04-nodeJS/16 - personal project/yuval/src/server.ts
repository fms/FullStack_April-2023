import express from 'express';
import 'express-async-errors';
import playersRouter from './routes/players';
import { globalErrorHandler } from './handlers/errorHandle';
import { logRequest } from './handlers/loggerHandle';

function createServer() {
    const app = express();
    app.use(express.static("public"));
    app.use(express.json());
    app.use(logRequest);
    app.use('/api/players', playersRouter);
    app.use(globalErrorHandler);
    return app;
}

export default createServer;