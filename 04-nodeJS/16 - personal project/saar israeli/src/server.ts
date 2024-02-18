import  express  from "express";
import notesRouter from './routes/notesRoutes';
import usersRouter from './routes/usersRoutes';
import {globalErrorHandler} from './handlers/ErrorHandler';
import {logRequest} from './handlers/Logger';
import cookieParser from 'cookie-parser';
import 'express-async-errors';


function createServer() {
    const app = express();
    app.use(express.static("public"));
    app.use(express.json());
    app.use(logRequest);
    app.use(cookieParser());

    app.use('/api/users',usersRouter);
    app.use('/api/notes', notesRouter);
    
    app.use(globalErrorHandler);
    return app;
}

export default createServer;

