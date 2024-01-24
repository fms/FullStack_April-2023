import express from 'express';
import TaskModel from '../model/taskModel';
import { TaskStatus } from '../model/taskStatus';

const tasks = new Array<TaskModel>();


export function getTask(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.send({ tasks });
    next();
}

export function addNewTask(req: express.Request, res: express.Response, next: express.NextFunction) {
    if (!(`title` in req.body && 'description' in req.body)) {
        throw new Error("Missing properties");
    }

    const { title, description }: TaskModel = req.body;
    const newTask = new TaskModel(title, description, TaskStatus.todo);
    tasks.push(newTask);
    next();

}

export function updateTask(req: express.Request, res: express.Response, next: express.NextFunction) {
    const { id } = req.body;
    const taskIndex = getTaskById(id);
    let changed = false;
    if ('title' in req.body) {
        tasks[taskIndex].title = req.body.title;
        changed = true;
    }

    if ('description' in req.body) {
        tasks[taskIndex].description = req.body.description;
        changed = true;
    }

    if ('status' in req.body) {
        const newStatus = req.body.status;
        if (!(newStatus in TaskStatus)) {
            throw new Error("invalid new status");
        }
        tasks[taskIndex].status = newStatus;
        changed = true;
    }

    if (!changed) {
        throw new Error("nothing to update!")
    }
    next();

}

export function updateStatus(req: express.Request, res: express.Response, next: express.NextFunction) {
    const { id } = req.body;
    const taskIndex = getTaskById(id);
    if ('status' in req.body) {
        let newStatus = req.body.status;
        if (!newStatus) {
            newStatus = 1;
        } else {
            newStatus = 0;
        }
        tasks[taskIndex].status = newStatus;
    }
    next();
}

export function deleteTask(req: express.Request, res: express.Response, next: express.NextFunction) {
    const { id } = req.body;
    const taskIndex = getTaskById(id);
    tasks.splice(taskIndex, 1);
    next();
}

function getTaskById(id: string | null | undefined) {
    if (id) {
        const index = tasks.findIndex(task => task.id === id);
        if (index == -1) {
            throw new Error("Can't find a task for the specified ID");
        }
        return index;
    }
    throw new Error("Need to specify the task ID");
}

