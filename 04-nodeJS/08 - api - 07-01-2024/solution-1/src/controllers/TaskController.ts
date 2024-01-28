import express, { NextFunction, Request, Response } from "express";
import { Task } from "../model/Task";
import { TaskStatus } from "../model/TaskStatus";

// Data
const tasks = new Array<Task>();

// Read
export function getTasks(req: Request, res: Response, next: NextFunction) {
    res.send({ tasks });
    next();
}

export function addTask(req: Request, res: Response, next: NextFunction) {
    if (!('title' in req.body && 'description' in req.body)) {
        throw new Error("Missing properties");
    }
    
    const { title, description }: Task = req.body;
    const newTask = new Task(title, description, TaskStatus.todo);
    tasks.push(newTask);
    next();
}

export function updateTask(req: Request, res: Response, next: NextFunction) {
    const { id } = req.body;
    const taskIndex = getTaskById(id);
    let changed = false;            // Did we update any property?

    if ('status' in req.body) {
        const newStatus = req.body.status;
        if (!(newStatus in TaskStatus)) {
            throw new Error("Invalid new status");
        }

        tasks[taskIndex].status = newStatus;
        changed = true;
    }

    if ('title' in req.body) {
        tasks[taskIndex].title = req.body.title;
        changed = true;
    }

    if ('description' in req.body) {
        tasks[taskIndex].description = req.body.description;
        changed = true;
    }


    if (!changed) {
        throw new Error("Noting to update!");
    }

    next();
}
export function deleteTask(req: Request, res: Response, next: NextFunction) {
    const { id } = req.body;
    const taskIndex = getTaskById(id);

    tasks.splice(taskIndex, 1);
    next()
}

function getTaskById(id:string | null | undefined) {
    if (id) {
        const index = tasks.findIndex(task => task.id === id);
        if (index == -1) {
            throw new Error("Can't find a task for the specified ID");
        }

        return index;
    }

    throw new Error("Need to specify the task ID");
}