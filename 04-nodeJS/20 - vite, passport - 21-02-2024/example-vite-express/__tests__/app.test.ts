import mongoose from 'mongoose';
import { TaskStatus } from '../src/server/model/TaskStatus';
import createServer from '../src/server/server';
import request from 'supertest';
import { connectToDatabase, setDatabaseDefaults } from '../src/server/database';
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
    })

    describe('initial get', () => {
        test('should be empty', async () => {
            const { status, body } = await request(app).get('/api/tasks/get');

            expect(status).toBe(200);
            expect(body.tasks).toEqual([]);
        });
    });

    const initialTask = { title: "initial title", description: "initial description" };
    const expectedInitialTask = { ...initialTask, status: TaskStatus.todo, id: "" };

    const taskToAdd = { title: "test title", description: "test description" };
    const expectedTask = { ...taskToAdd, status: TaskStatus.todo, id: expect.any(String)};
    const taskToDelete = { id: "" };

    describe('started with one existing task', () => {
        beforeAll(async () => {
            const { status, body } = await request(app).post('/api/tasks/add').send(initialTask);
            taskToDelete.id = body.tasks[0].id;
        });

        test('add a single valid task', async () => {
            const { status, body } = await request(app).post('/api/tasks/add').send(taskToAdd);
            expect(status).toBe(200);

            expect(body.tasks).toContainEqual(expectedTask);
            taskToDelete.id = body.tasks[0].id;
        });

        describe("delete", () => {
            test('an existing task should succeed', async () => {
                expectedInitialTask.id = taskToDelete.id;
                const { status, body } = await request(app).delete('/api/tasks/delete').send(taskToDelete);
                expect(status).toBe(200);
                expect(body.tasks).not.toContainEqual(expectedInitialTask);
            });

            test('a task with id that does not exist', async () => {
                const { status, body } = await request(app).delete('/api/tasks/delete').send({id: "invalid-id"});
                expect(status).toBe(500);
                expect(body.error).toBe("Can't find a task for the specified ID");
            });

            test('without specifying an id', async () => {
                const { status, body,  } = await request(app).delete('/api/tasks/delete');
                expect(status).toBe(500);
                expect(body.errors).toContain("The task ID must be specified");
            });
        });
    });
})