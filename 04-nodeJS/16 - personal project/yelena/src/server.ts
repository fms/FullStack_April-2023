// Express
import express from 'express';

// This is a special import that alters the functionality of express to add support
// for catching throw() from async middleware. No code changes are required except
// importing this module.
import 'express-async-errors';
import tasksRouter from './routes/tasks';
import { globalErrorHandler } from './handlers/ErrorHandler';
import { logRequest } from './handlers/Logger';

function createServer() {
    const app = express();

    // Static files
    app.use(express.static("public"));

    // Auto-parse JSON body
    app.use(express.json());

    // Logger
    app.use(logRequest);

    // API: Tasks
    app.use('/api', tasksRouter);

    // Handle errors not handled by the built-in error handler
    app.use(globalErrorHandler);

    return app;
}

export default createServer;