import { TaskStatus } from '../src/model/TaskStatus';
import createServer from '../src/server';
import request from 'supertest';

const app = createServer();

describe('app', () => {
    describe('initial get', () => {
        test('should be empty', async () => {
            const { status, body } = await request(app).get('/api/tasks/get');

            expect(status).toBe(200);
            expect(body.tasks).toEqual([]);
        });
    });

    const initialTask = { title: "initial title", description: "initial description" };
    const expectedInitialTask = { ...initialTask, status: TaskStatus.todo, id: "" };
    
    const extraFieldTask = { title: "initial title", description: "initial description", name: "asd" };


    const taskToUpdate = { title: "update test title", description: "update test description", id: "" };
    const expectedTaskToUpdate = { ...taskToUpdate, status: TaskStatus.todo, id: expect.any(String) };
    const taskToUpdateId = { id: "" }

    const taskToAdd = { title: "test title", description: "test description" };
    const expectedTask = { ...taskToAdd, status: TaskStatus.todo, id: expect.any(String) };
    const taskToDelete = { id: "" };


    describe('started with one existing task', () => {
        beforeAll(async () => {
            const { status, body } = await request(app).post('/api/tasks/add').send(initialTask);
            taskToDelete.id = body.tasks[0].id;
        });

        describe('add', () =>{
            test('add a single valid task', async () => {
                const { status, body } = await request(app).post('/api/tasks/add').send(taskToAdd);
                expect(status).toBe(200);
                expect(body.tasks).toContainEqual(expectedTask);
                taskToUpdateId.id = body.tasks[1].id;
            });
            test('adding extra fields on task', async() => {
                const {status , body} = await request(app).post('/api/tasks/add').send(extraFieldTask);
                expect(status).toBe(500);
                expect(body.errors).toEqual(["Extra fields found"]);
            })
        }) 

        describe("patch", () => {
            test('task should be updated', async () => {
                expectedTaskToUpdate.id = taskToUpdateId.id
                const { status, body } = await request(app).patch('/api/tasks/update').send(expectedTaskToUpdate);
                expect(status).toBe(200);
                expect(body.tasks).toContainEqual(expectedTaskToUpdate);
            });
            test('without specifying an id', async () => {
                const { status, body } = await request(app).patch('/api/tasks/update').send(initialTask);
                expect(status).toBe(500);
                expect(body.errors).toContain("The task ID must be specified");
            });
            test('empty task', async () => {
                const { status, body } = await request(app).patch('/api/tasks/update').send(taskToDelete);
                expect(status).toBe(500);
                expect(body.errors).toEqual(["Must include at least one of title, description or status"])
            });
        })

        describe("delete", () => {
            test('an existing task should succeed', async () => {
                expectedInitialTask.id = taskToDelete.id;
                const { status, body } = await request(app).delete('/api/tasks/delete').send(taskToDelete);
                expect(status).toBe(200);
                expect(body.tasks).not.toContainEqual(expectedInitialTask);
            });

            test('a task with id that does not exist', async () => {
                const { status, body } = await request(app).delete('/api/tasks/delete').send({ id: "invalid-id" });
                expect(status).toBe(500);
                expect(body.error).toBe("Can't find a task for the specified ID");
            });

            test('without specifying an id', async () => {
                const { status, body, } = await request(app).delete('/api/tasks/delete');
                expect(status).toBe(500);
                expect(body.errors).toContain("The task ID must be specified");
            });
        });
    });
})