import express from 'express';
import 'express-async-errors';
import playersRouter from './routes/players';
import { globalErrorHandler } from './handlers/errorHandle';
import { logRequest } from './handlers/loggerHandle';
import { PlayerModel } from './model/player';

function createServer() {
    const app = express();
    app.use(express.static("public"));
    app.use(express.json());
    app.use(logRequest);
    app.get('/playerCount', async (req, res) => {
        try {
            const count = await PlayerModel.countDocuments();
            res.json({ count });
        }
        catch (error) {
            console.error('Error retrieving player count:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
    app.use('/api/players', playersRouter);
    app.use(globalErrorHandler);
    return app;
}

export default createServer;