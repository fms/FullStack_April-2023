import mongoose from 'mongoose';
import { Position } from '../src/server/model/position';
import createServer from '../src/server/server';
import request from 'supertest';
import { setDatabaseDefaults } from '../src/server/database';
import { MongoMemoryServer } from 'mongodb-memory-server';
// import {describe, afterAll, expect, beforeAll, test} from 'vitest';

const app = createServer();

describe('app', () => {
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

    // describe('initial get', () => {
    //     test('should be empty', async () => {
    //         const { status, body } = await request(app).get('/api/players/get/players');
    //         expect(status).toBe(200);
    //         expect(body.players).toEqual([]);
    //     });
    // });

    describe('add player', () => {
        test('should add a player', async () => {
            const playerData = { name: "Russell Westbrook", age: 36, jerseyNumber: 0, height: 193, position: Position.PG };
            const { status, body } = await request(app).post('/api/players/add/player').send(playerData);
            expect(status).toBe(200);
            const playersWithoutId = body.players.map((player: any) => {
                const { _id, ...playerWithoutId } = player;
                return playerWithoutId;
            });
            expect(playersWithoutId).toEqual([{ ...playerData }]);
        });

        test('should return error for duplicate player', async () => {
            const playerData = { name: "Russell Westbrook", age: 36, jerseyNumber: 0, height: 193, position: Position.PG };
            const { status, body } = await request(app).post('/api/players/add/player').send(playerData);
            expect(status).toBe(500);
            expect(body.error).toEqual("Player already added");
        });
    });

    describe('update jersey number', () => {
        test('should update the jersey number', async () => {
            const playerData = { name: "Russell Westbrook", jerseyNumber: 99 };
            const { status, body } = await request(app).patch('/api/players/update/JerseyNumber').send(playerData);
            expect(status).toBe(200);
            const playersWithoutId = body.players.map((player: any) => {
                const { _id, ...playerWithoutId } = player;
                return playerWithoutId;
            });
            expect(playersWithoutId).toEqual([{ name: "Russell Westbrook", age: 36, jerseyNumber: 99, height: 193, position: Position.PG }]);
        });

        test('should return error for non-existing player', async () => {
            const playerData = { name: "LeBron James", jerseyNumber: 23 };
            const { status, body } = await request(app).patch('/api/players/update/JerseyNumber').send(playerData);
            expect(status).toBe(500);
            expect(body.error).toEqual("Can't find a player with this name");
        });
    });

    describe('update position', () => {
        test('should update the position', async () => {
            const playerData = { name: "Russell Westbrook", position: 4 };
            const { status, body } = await request(app).patch('/api/players/update/Position').send(playerData);
            expect(status).toBe(200);
            const playersWithoutId = body.players.map((player: any) => {
                const { _id, ...playerWithoutId } = player;
                return playerWithoutId;
            });
            expect(playersWithoutId).toEqual([{ name: "Russell Westbrook", age: 36, jerseyNumber: 99, height: 193, position: Position.PF }]);
        });

        test('update without change', async () => {
            const playerData = { name: "Russell Westbrook", position: 4 };
            const { status, body } = await request(app).patch('/api/players/update/Position').send(playerData);
            expect(status).toBe(500);
            expect(body.error).toEqual("Nothing to update!");
        });
    });

    describe('delete', () => {
        test('delete one player', async () => {
            const playerToDelete = { name: "Russell Westbrook" };
            const { status, body } = await request(app).delete('/api/players/delete').send(playerToDelete);
            expect(status).toBe(200);
            expect(body.players).toEqual([]);
        });
    });

    describe('Validation Tests', () => {
        test('should return 500 for missing name in addPlayer', async () => {
            const playerData = { age: 25, jerseyNumber: 10, height: 180, position: 1 };
            const { status, body } = await request(app).post('/api/players/add/player').send(playerData);
            expect(status).toBe(500);
            expect(body.errors).toContain('Name must always be specified');
        });

        test('should return 500 for missing age in addPlayer', async () => {
            const playerData = { name: 'Ageless Man', jerseyNumber: 10, height: 180, position: 1 };
            const { status, body } = await request(app).post('/api/players/add/player').send(playerData);
            expect(status).toBe(500);
            expect(body.errors).toContain('Age must always be specified');
        });

        test('should return 500 for invalid age in addPlayer', async () => {
            const playerData = { name: 'A Child', age: 15, jerseyNumber: 10, height: 180, position: 1 };
            const { status, body } = await request(app).post('/api/players/add/player').send(playerData);
            expect(status).toBe(500);
            expect(body.errors).toContain('Age must be a number greater than or equal to 18');
        });

        test('should return 500 for missing jersey number in addPlayer', async () => {
            const playerData = { name: 'I Cant Decide On A Number', age: 25, height: 180, position: 1 };
            const { status, body } = await request(app).post('/api/players/add/player').send(playerData);
            expect(status).toBe(500);
            expect(body.errors).toContain('Jersey number must always be specified');
        });

        test('should return 500 for invalid jersey number in addPlayer', async () => {
            const playerData = { name: 'Triple Digit Man', age: 25, jerseyNumber: 100, height: 180, position: 1 };
            const { status, body } = await request(app).post('/api/players/add/player').send(playerData);
            expect(status).toBe(500);
            expect(body.errors).toContain('Jersey number must be a number between 0 and 99');
        });

        test('should return 500 for missing height in addPlayer', async () => {
            const playerData = { name: 'Never Ask A Woman Her Height', age: 25, jerseyNumber: 12, position: 1 };
            const { status, body } = await request(app).post('/api/players/add/player').send(playerData);
            expect(status).toBe(500);
            expect(body.errors).toContain('Height must always be specified');
        });

        test('should return 500 for invalid height in addPlayer', async () => {
            const playerData = { name: 'How Is The Weather Up There', age: 25, jerseyNumber: 69, height: 270, position: 1 };
            const { status, body } = await request(app).post('/api/players/add/player').send(playerData);
            expect(status).toBe(500);
            expect(body.errors).toContain('The height of a player must be a number between 160 and 230');
        });

        test('should return 500 for missing position in addPlayer', async () => {
            const playerData = { name: 'I Can Play Whatever You Want', age: 25, jerseyNumber: 69, height: 200 };
            const { status, body } = await request(app).post('/api/players/add/player').send(playerData);
            expect(status).toBe(500);
            expect(body.errors).toContain('Position must always be specified');
        });

        test('should return 500 for invalid position in addPlayer', async () => {
            const playerData = { name: 'Sixth Man Of The Year', age: 25, jerseyNumber: 69, height: 200, position: 6 };
            const { status, body } = await request(app).post('/api/players/add/player').send(playerData);
            expect(status).toBe(500);
            expect(body.errors).toContain('Invalid position');
        });
    });
});