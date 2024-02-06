import mongoose from 'mongoose';
import { Player } from '../src/model/player';
import { Person } from '../src/model/person';
import { Position } from '../src/model/position';
import createServer from '../src/server';
import request from 'supertest';
import { connectToDatabase, setDatabaseDefaults } from '../src/database';
import { MongoMemoryServer } from 'mongodb-memory-server';

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

    describe('initial get', () => {
        test('should be empty', async () => {
            const { status, body } = await request(app).get('/api/players/get');

            expect(status).toBe(200);
            expect(body.players).toEqual([]);
        });
    });

    const personToUse: Person = {
        firstName: 'Luka',
        lastName: 'Doncic',
        age: 25
    };
    const noFirstName = {lastName: "Smith", age: 22}
    const noNamePlayer = new Player(noFirstName as Person, 34, 215, Position.C)
    const firstPlayer = new Player(personToUse, 77, 201, Position.PG);
    const playerToAdd = new Player({firstName: 'LeBron', lastName: 'James', age: 39}, 23, 206, 3);
    const expectedPlayer = {...playerToAdd};
    let playerToDelete = {person: ""};

    describe('started with one existing player', () => {
        beforeAll(async () => {
            const { status, body } = await request(app).post('/api/players/add').send(firstPlayer);
            playerToDelete.person = body.players[0].person;
        });

        test('add a single valid player', async () => {
            const { status, body } = await request(app).post('/api/players/add').send(playerToAdd);
            expect(status).toBe(200);

            expect(body.players).toContainEqual(expectedPlayer);
            playerToDelete.person = body.players[0].person;
        });

        test('No name', async () => {
            const { status, body } = await request(app).post('/api/players/add').send(noNamePlayer)
            expect(status).toBe(500);
            expect(body.error).toBe('First name must always be specified');
        });
    });
});

// describe('Person Validation', () => {
//     test('Age should be a number', () => {
//         const req = {
//             body: {
//                 firstName: 'John',
//                 lastName: 'Doe',
//                 age: 'abc' // Age is not a number
//             }
//         };

//         const errors = personValidation(req);
//         expect(errors).toHaveLength(1); // Expect one error message
//         expect(errors[0]).toEqual('Age must be an integer greater than or equal to 18'); // Expect error message for invalid age
//     });

//     test('Age should be 18 or more', () => {
//         const req = {
//             body: {
//                 firstName: 'John',
//                 lastName: 'Doe',
//                 age: 17 // Age is less than 18
//             }
//         };

//         const errors = personValidation(req);
//         expect(errors).toHaveLength(1); // Expect one error message
//         expect(errors[0]).toEqual('Age must be an integer greater than or equal to 18'); // Expect error message for age less than 18
//     });

//     test('Valid person', () => {
//         const req = {
//             body: {
//                 firstName: 'John',
//                 lastName: 'Doe',
//                 age: 25 // Valid age
//             }
//         };

//         const errors = personValidation(req);
//         expect(errors).toHaveLength(0); // Expect no errors for a valid person
//     });
// });
