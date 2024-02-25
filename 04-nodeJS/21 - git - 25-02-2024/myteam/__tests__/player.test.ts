import mongoose from 'mongoose';
import { Position } from '../src/server/model/position';
import createServer from '../src/server/server';
import request from 'supertest';
import { setDatabaseDefaults } from '../src/server/database';
import { MongoMemoryServer } from 'mongodb-memory-server';


const app = createServer();

describe('player', () => {
    let mongoServer: MongoMemoryServer;

    beforeAll(async () => {
        mongoServer = await MongoMemoryServer.create();
        await mongoose.connect(mongoServer.getUri());
        setDatabaseDefaults();
    });

    afterAll(async () => {
        await mongoose.disconnect();
        await mongoose.connection.close();
        if (mongoServer) {
            await mongoServer.stop();
        }
    });
    describe('initial get', () => {
        test('should be empty', async () => {
            const { status, body } = await request(app).get('/api/players/get/players');
            expect(status).toBe(200);
            expect(body.players).toEqual([]);
        });
    });
});
    
