import { Task, Status } from '../models/tasks';
import express, { NextFunction, Request, Response } from "express";

const tasks: Task[] = [];

export function createTask(req: express.Request, res: express.Response, next: NextFunction) {
    
        const newTaskDetails = req.body;

        if(!newTaskDetails.title || !newTaskDetails.description) {
            throw new Error(`Missing task. title: ${newTaskDetails.title}, des: ${newTaskDetails.description}`);
        }

        const index = tasks.findIndex(item => item.title === newTaskDetails.title);
        if (index !== -1) {
            throw new Error("Task to add already exists");
        }

        let taskID = generateUniqueId();
        while (tasks.some(item => item.id === taskID)) {
            taskID = generateUniqueId();
        }

        const newTask: Task = {
            id: taskID,
            title: newTaskDetails.title,
            description: newTaskDetails.description,
            status: Status.TO_DO
        };

        console.log("Adding:", newTask);
        tasks.push(newTask);
        res.send({ tasks });
    
    
    next();
}

export function getTasks(req: express.Request, res: express.Response, next: NextFunction) {
    res.send({ tasks });
    next();
}

export function updateStatus(req: express.Request, res: express.Response, next: NextFunction) {
        const { id } = req.body;

        if(!id) {
            throw new Error(`ID not valid. id: ${id}`);
        }

        const taskToUpdate = tasks.find(task => task.id === Number(id));
        if(!taskToUpdate) {
            throw new Error(`No task with this ID: ${id}`);
        }

        console.log(`Updating status "${taskToUpdate.title}":`);
        console.log("Before:", taskToUpdate);

        switch(taskToUpdate.status) {
            case Status.TO_DO:
                taskToUpdate.status = Status.DONE;
                break;
            default:
                taskToUpdate.status = Status.TO_DO;
                break;
        }

        console.log("After :", taskToUpdate);
        res.send({ tasks });
        next();
}

export function deleteTask(req: express.Request, res: express.Response, next: NextFunction) {
    
        const { id } = req.body;

        if(!id) {
            throw new Error(`ID not valid. id: ${id}`);
        }

        const index = tasks.findIndex(task => task.id === Number(id));
        if(index === -1) {
            throw new Error(`No task with this ID: ${id}`);
        }

        const taskToDelete = tasks.splice(index, 1);
        console.log("Delete:", taskToDelete);

        res.send({ tasks });
    next();
}

function generateUniqueId(): number {
    const randomId = Math.floor(10000 + Math.random() * 90000);
    return randomId;
}