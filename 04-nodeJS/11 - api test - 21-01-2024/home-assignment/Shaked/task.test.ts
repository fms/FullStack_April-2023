import { createServer } from './src/server';
import { Status } from './src/models/class';
import request from 'supertest';
import { generateUniqueId } from './src/controllers/taskController';

const app = createServer();

let newTask: Task;

beforeAll(() => {
    newTask = { taskname: "Task", description: "Description", status: Status.ToDo, id: generateUniqueId() };
});
const task1 = { taskname: "Shaked", description: "Description", status: Status.ToDo, id: generateUniqueId() }
const task2 = { taskname: "Shaked2", description: "Description", status: Status.ToDo, id: generateUniqueId() }
const task3 = { taskname: "Asi", description: "Description", status: Status.ToDo, id: generateUniqueId() }
const missingTaskname = {description: "Description", status: Status.ToDo, id: generateUniqueId() }
const missingTaskDes = { taskname: "Asi", status: Status.ToDo, id: generateUniqueId() }
const missingTaskStatus = { taskname: "Asi", description: "Description", id: generateUniqueId() }
const nameToDelete = { taskname: "Shaked" }
const newName = { taskname: "Yossi" };
const idToDelete = { id: generateUniqueId() }

describe('app', () => {
    test('checking app', async () => {
        const { status, body } = await request(app).get('/api/tasks/gettasks');
        expect(body.tasks).toEqual([]);
        expect(status).toBe(200);
    });
});

describe('POST', () => {
    test('Checking post', async () => {
        const { status, body } = await request(app).post('/api/tasks').send(newTask);
        expect(status).toBe(200);
        expect(body.tasks).toEqual(expect.arrayContaining([{ ...newTask, id: expect.any(Number) }]));
    });

    test('New task', async () => {
        const { status, body } = await request(app).post('/api/tasks').send(task1);
        expect(status).toBe(200);
        expect(body.tasks).toEqual(expect.arrayContaining([{ ...task1, id: expect.any(Number) }]));
    });

    test('New task', async () => {
        const { status, body } = await request(app).post('/api/tasks').send(task2);
        expect(status).toBe(200);
        expect(body.tasks).toEqual(expect.arrayContaining([{ ...task2, id: expect.any(Number) }]));
    });

    test('Task isnt exist', async () => {
        const { status, body } = await request(app).post('/api/tasks').send(task2);
        expect(status).toBe(500);
    });

    test('Task without taskname', async () => {
        const { status, body } = await request(app).post('/api/tasks').send(missingTaskname);
        expect(status).toBe(500);
        expect(body.errors).toContain('Taskname length must be between 2~12 characters');
    });

    test('Task without description', async () => {
        const { status, body } = await request(app).post('/api/tasks').send(missingTaskDes);
        expect(status).toBe(500);
        expect(body.errors).toContain('Description must not be empty');
    });

    test('Task without status', async () => {
        const { status, body } = await request(app).post('/api/tasks').send(missingTaskStatus);
        expect(status).toBe(500);
        expect(body.errors).toContain('Invalid status value');
    });
});

describe('DELETE', () => {
    test('Checking delete by name', async () => {
        const { status, body } = await request(app).delete(`/api/tasks/delete/Shaked`).send(nameToDelete);
        expect(status).toBe(200);
        console.log("After delete:", JSON.stringify(body.tasks, null, 2));
        expect(body.tasks).not.toContain(task1);
    });
    test('Missing name to delete', async () => {
        const { status, body } = await request(app).delete(`/api/tasks/delete/Shaked`).send(missingTaskname);
        expect(status).toBe(500);
        expect(body.errors).toContain('Taskname length must be between 2~12 characters');
    });
});

describe('PATCH', () => {
    test('Checking update task name', async () => {
        const { status, body } = await request(app)
            .patch(`/api/tasks/updateTN/Shaked2`)
            .send(newName);
        expect(status).toBe(200);
        expect(body.tasks).not.toBe(nameToDelete);
        console.log('New Tasks:' + JSON.stringify(body.tasks, null, 2))
    })
});

describe('PUT', () => {
    test('Replace task by task name', async () => {
        const { status, body } = await request(app)
            .put(`/api/tasks/replace/Yossi`)
            .send(task3);
        expect(status).toBe(200);
        expect(body.tasks).not.toBe(newName);
        console.log('New Tasks:' + JSON.stringify(body.tasks, null, 2))
    })
});