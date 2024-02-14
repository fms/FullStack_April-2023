import express from 'express';
import taskRoutes from "./routes/tasks"

function createServer() {

    const app = express();
    app.use(express.json());
    app.use(express.urlencoded());
    app.use(express.static('public'));
    app.use("/api/tasks", taskRoutes)
    return app;
}
export default createServer;