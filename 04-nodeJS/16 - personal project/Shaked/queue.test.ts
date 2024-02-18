import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose, { mongo } from "mongoose";
import { createServer } from './src/server';
import request from 'supertest';
import { Queue, City, Time } from './src/models/class';
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

    const newQueue: Queue = { name: "Queue", phonenumber: 52524152, city: City.Ashdod, date: new Date('2020-04-12'), time: new Time(10, 30) };
    const customer1: Queue = { name: "Shaked", phonenumber: 52524152, city: City.Ashdod, date: new Date('2020-04-12'), time: new Time(10, 30) };
    const customer2: Queue = { name: "Yossef", phonenumber: 52514122, city: City.Gedera, date: new Date('2022-04-12'), time: new Time(12, 30) };

    describe("app", () => {
        describe("First initialization", () => {
            test("Array of queues should be empty", async () => {
                const { status, body } = await request(app).get("/api/queues/get");
    
                expect(status).toBe(200);
                expect(body.queues).toEqual([]);
            });
        });


        describe('POST', () => {
            test('Checking post', async () => {
                const { status, body } = await request(app).post('/api/queues/add').send(newQueue);
                expect(status).toBe(201);
                expect(body.message).toBe('Queue created successfully');
                expect(body.newQueue).toBeDefined(); 
                expect(body.newQueue.name).toBe(newQueue.name); 
                expect(body.newQueue.phonenumber).toBe(newQueue.phonenumber);
                expect(body.newQueue.city).toBe(newQueue.city);
                expect(new Date(body.newQueue.date)).toEqual(newQueue.date); 
                expect(body.newQueue.time).toEqual(newQueue.time);
            });
        });
        test('Adding more customer', async () => {
            const { status, body } = await request(app).post('/api/queues/add').send(customer1);
            expect(status).toBe(201);
            expect(body.message).toBe('Queue created successfully');
            expect(body.newQueue).toBeDefined(); 
            expect(body.newQueue.name).toBe(customer1.name); 
            expect(body.newQueue.phonenumber).toBe(customer1.phonenumber);
            expect(body.newQueue.city).toBe(customer1.city);
            expect(new Date(body.newQueue.date)).toEqual(customer1.date); 
            expect(body.newQueue.time).toEqual(customer1.time);
        })
    });

    describe("GET", () => {
        test("Getting all queues", async () => {
            const { status, body } = await request(app).get("/api/queues/get");
            expect(status).toBe(200);
            console.log("All Queues:", body.queues);
        });
    });
    const nameToDelete = {name: "Queue"}
    const nameToUpdate = {name: "Shaked1"}

    describe('DELETE', () => {
        test('Checking delete by name', async () => {
            const { status } = await request(app).delete(`/api/queues/delete/Queue`).send(nameToDelete);
            expect(status).toBe(200);
    
            const response = await request(app).get("/api/queues/get");
            const allQueues = response.body.queues;
    
            console.log("All Queues:", JSON.stringify(allQueues, null, 2));
        });
    });
    describe('Patch', () => {
        test('Checking update name', async () => {
            const { status } = await request(app).patch(`/api/queues/update/Shaked`).send(nameToUpdate);
            expect(status).toBe(200);
    
            const response = await request(app).get("/api/queues/get");
            const allQueues = response.body.queues;
    
            console.log("All Queues:", JSON.stringify(allQueues, null, 2));
        });
    });
    
    describe('Put', () => {
        test('Checking replace customer', async () => {
            const { status } = await request(app).put(`/api/queues/replace/Shaked1`).send(customer2);
            expect(status).toBe(200);
    
            const response = await request(app).get("/api/queues/get");
            const allQueues = response.body.queues;
    
            console.log("All Queues:", JSON.stringify(allQueues, null, 2));
        });
    });

});









//     test('New task', async () => {
//         const { status, body } = await request(app).post('/api/tasks').send(task1);
//         expect(status).toBe(200);
//         expect(body.tasks).toEqual(expect.arrayContaining([{ ...task1, id: expect.any(Number) }]));
//     });

//     test('New task', async () => {
//         const { status, body } = await request(app).post('/api/tasks').send(task2);
//         expect(status).toBe(200);
//         expect(body.tasks).toEqual(expect.arrayContaining([{ ...task2, id: expect.any(Number) }]));
//     });

//     test('Task isnt exist', async () => {
//         const { status, body } = await request(app).post('/api/tasks').send(task2);
//         expect(status).toBe(500);
//     });

//     test('Task without taskname', async () => {
//         const { status, body } = await request(app).post('/api/tasks').send(missingTaskname);
//         expect(status).toBe(500);
//         expect(body.errors).toContain('Taskname length must be between 2~12 characters');
//     });

//     test('Task without description', async () => {
//         const { status, body } = await request(app).post('/api/tasks').send(missingTaskDes);
//         expect(status).toBe(500);
//         expect(body.errors).toContain('Description must not be empty');
//     });

//     test('Task without status', async () => {
//         const { status, body } = await request(app).post('/api/tasks').send(missingTaskStatus);
//         expect(status).toBe(500);
//         expect(body.errors).toContain('Invalid status value');
//     });
// });

// describe('DELETE', () => {
//     test('Checking delete by name', async () => {
//         const { status, body } = await request(app).delete(`/api/tasks/delete/Shaked`).send(nameToDelete);
//         expect(status).toBe(200);
//         console.log("After delete:", JSON.stringify(body.tasks, null, 2));
//         expect(body.tasks).not.toContain(task1);
//     });
//     test('Missing name to delete', async () => {
//         const { status, body } = await request(app).delete(`/api/tasks/delete/Shaked`).send(missingTaskname);
//         expect(status).toBe(500);
//         expect(body.errors).toContain('Taskname length must be between 2~12 characters');
//     });
// });

// describe('PATCH', () => {
//     test('Checking update task name', async () => {
//         const { status, body } = await request(app)
//             .patch(`/api/tasks/updateTN/Shaked2`)
//             .send(newName);
//         expect(status).toBe(200);
//         expect(body.tasks).not.toBe(nameToDelete);
//         console.log('New Tasks:' + JSON.stringify(body.tasks, null, 2))
//     })
// });

// describe('PUT', () => {
//     test('Replace task by task name', async () => {
//         const { status, body } = await request(app)
//             .put(`/api/tasks/replace/Yossi`)
//             .send(task3);
//         expect(status).toBe(200);
//         expect(body.tasks).not.toBe(newName);
//         console.log('New Tasks:' + JSON.stringify(body.tasks, null, 2))
//     })
// });