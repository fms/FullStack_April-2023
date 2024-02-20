
import express from 'express';


import 'express-async-errors';
import tasksRouter from './routes/tasks';



function createServer() {
    const app = express();

    // Static files
    app.use(express.static("public"));

    // Auto-parse JSON body
    app.use(express.json());

    // API: Tasks
    app.use('/api/tasks', tasksRouter);


    return app;
}

export default createServer;