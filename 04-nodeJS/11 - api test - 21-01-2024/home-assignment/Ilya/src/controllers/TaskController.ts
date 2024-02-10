import { NextFunction, Request, Response } from "express";
import { Task } from "../model/Task";
import { TaskStatus } from "../model/TaskStatus";
import { matchedData } from "express-validator";

// Data
const tasks = new Array<Task>();

// Read
export function getTasks(req: Request, res: Response, next: NextFunction) {
    res.send({ tasks });
    next();
}

// Create
export function addTask(req: Request, res: Response, next: NextFunction) {
    const { title, description }: Task = req.body;
    const newTask = new Task(title, description, TaskStatus.todo);
    tasks.push(newTask);
    next();
}

// Update
export function updateTask(req: Request, res: Response, next: NextFunction) {
    const { id } = req.body;
    const taskIndex = getTaskById(id);
    let changed = false;                                            // Did we update any property?

    // matchedData() returns an object with validated fields only. This is useful for the oneOf()
    // we use for validating this request as it will omit invalid fields preset in req.body.
    //
    // Example request with valid ID and status, while title is invalid (less than 5 characters):
    // PATCH body: { id: '1705314447645-7649275319907576', title: '1235', status: '0' }
    //
    // Would have:
    // req.body: { id: '1705314447645-7649275319907576', title: '1235', status: '0' }
    // payload:  { status: '0', id: '1705314447645-7649275319907576' }
    const payload = matchedData(req);
    if ('status' in payload) {
        tasks[taskIndex].status = payload.status;
        changed = true;
    }

    if ('title' in payload) {
        tasks[taskIndex].title = payload.title;
        changed = true;
    }

    if ('description' in payload) {
        tasks[taskIndex].description = payload.description;
        changed = true;
    }


    if (!changed) {
        throw new Error("Noting to update!");
    }

    next();
}

// Delete
export function deleteTask(req: Request, res: Response, next: NextFunction) {
    const { id } = req.body;
    const taskIndex = getTaskById(id);

    tasks.splice(taskIndex, 1);
    next()
}

function getTaskById(id: string) {
    const index = tasks.findIndex(task => task.id === id);
    if (index == -1) {
        throw new Error("Can't find a task for the specified ID");
    }

    return index;
}