// Express
import express from 'express';
import { globalErrorHandler } from './handlers/ErrorHandler';
import { logRequest } from './handlers/Logger';

const app = express();
const port = process.env.PORT || 3000;

// Static files
app.use(express.static("public"));

// Auto-parse JSON body
app.use(express.json());

// Logger
app.use(logRequest);

// API: Tasks
import tasksRouter from './routes/tasks';
app.use('/api/tasks', tasksRouter);

// Handle errors not handled by the built-in error handler
app.use(globalErrorHandler);

app.listen(port, () => console.log(`Server started on http://localhost:${port}`));

