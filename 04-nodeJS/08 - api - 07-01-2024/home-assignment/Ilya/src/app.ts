// Express
import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

// Static files
app.use(express.static("public"));

// Auto-parse JSON body
app.use(express.json());

// API: Tasks
import tasksRouter from './routes/tasks';
app.use('/api/tasks', tasksRouter);

// Handle errors not handled by the built-in error handler
app.use(globalErrorHandler);

app.listen(port, () => console.log(`Server started on http://localhost:${port}`));

function globalErrorHandler(error: any, req: express.Request, res: express.Response, next: express.NextFunction) {
    if (error instanceof Error){
        res.statusMessage = error.message;
        res.status(500).send({ error: error.message });
    }
    else {
        res.status(500).send({ error });
    }
}