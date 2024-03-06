import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import { createServer } from './src/server';
import request from 'supertest';
import { City } from "./src/models/class";

const app = createServer();

describe("app", () => {
    let mongoServer: MongoMemoryServer;

    beforeAll(async () => {
        mongoServer = await MongoMemoryServer.create();
        await mongoose.connect(mongoServer.getUri());
    });
    afterAll(async () => {
        await mongoose.disconnect();
        await mongoose.connection.close();
        if (mongoServer) {
            await mongoServer.stop();
        }
    });

    const ObjectId = mongoose.Types.ObjectId;
    const user = new ObjectId();

    describe("app", () => {
        describe("First initialization", () => {
            test("Array of queues should be empty", async () => {
                const { status, body } = await request(app)
                    .get("/api/queues/get")
                    .set("Cookie", `username=${user}`);
                console.log("Response Body:", body.userQueues);
                expect(status).toBe(200);
            });
        });
    });

    const newQueue = {
        name: "Shaked",
        phonenumber: 52524152,
        city: City.Ashdod,
        date: new Date('2020-04-12').toISOString(),
        time: { hours: 10, minutes: 30 },
    };

    const anotherQueue = {
        name: "Yossi",
        phonenumber: 52524152,
        city: City.Gedera,
        date: new Date('2020-04-12').toISOString(),
        time: { hours: 15, minutes: 30 },
    };

    const Queue1To2 = {
        name: "Asi",
        phonenumber: 52124112,
        city: City.Ashdod,
        date: new Date('2024-04-12').toISOString(),
        time: { hours: 13, minutes: 30 },
    };
    const Queue2 = {
        name: "Asaf",
        phonenumber: 52124222,
        city: City.Yavne,
        date: new Date('2024-04-12').toISOString(),
        time: { hours: 13, minutes: 0 },
    };

    // POST
    test('POST Checking', async () => {
        const { status, body } = await request(app).post('/api/queues/add').send(newQueue);
        expect(status).toBe(201);
        const noID = { ...newQueue, _id: expect.any(String), __v: 0 };
        noID._id = body.newQueue._id;
        expect(body.newQueue).toEqual(noID);
        console.log(body.newQueue)
    });

    test('POST - Adding more queue', async () => {
        const { body, status } = await request(app)
            .post('/api/queues/add')
            .send(anotherQueue).set("Cookie", `username=${user}`);
        expect(status).toBe(201);
        expect(anotherQueue).toBeDefined();
    });

    test('POST - Adding more queue', async () => {
        const { body, status } = await request(app)
            .post('/api/queues/add')
            .send(Queue1To2).set("Cookie", `username=${user}`);
        expect(status).toBe(201);
        expect(Queue1To2).toBeDefined();
    });

    test('POST- new queue without city', async () => {
        const queueWithoutCity = {
            name: "Shaked",
            phonenumber: 52524152,
            date: new Date('2020-04-12').toISOString(),
            time: { hours: 10, minutes: 30 },
        };
        const { status, body } = await request(app).post('/api/queues/add').send(queueWithoutCity);
        expect(status).toBe(500);
        expect(body.errors[0]).toBe("City does not exist");
    });

    // Delete
    describe('DELETE', () => {
        test('Checking delete by name', async () => {
            await request(app)
                .delete(`/api/queues/delete/Shaked`)
                .set('Cookie', [`username=${user}`]);
            const { body: afterDelete } = await request(app)
                .get('/api/queues/get')
                .set('Cookie', [`username=${user}`]);

            expect(afterDelete).not.toContain(newQueue);
            console.log('New Queues:' + JSON.stringify(afterDelete.userQueues, null, 2));
        });
    });

    // Patch
    describe('Patch', () => {
        const newName = 'Shaked'
        test('Checking update name', async () => {
            const { status } = await request(app)
                .patch(`/api/queues/update/Yossi`).send({ name: newName })
            expect(status).toBe(200);

            await request(app)
                .get('/api/queues/get')
                .set('Cookie', [`username=${user}`]);
        });
    });

    //Put
    describe('PUT', () => {
        test('Checking replace queue', async () => {
            const { status } = await request(app)
                .put(`/api/queues/replace/Asi`).send(Queue2);

            expect(status).toBe(200);
            await request(app)
                .get('/api/queues/get')
                .set('Cookie', [`username=${user}`]);
        });
    });

});



