import { Task, Status } from '../models/class';
import express from 'express';
const tasks: Task[] = [];

export function createTask(req: express.Request, res: express.Response, next: express.NextFunction) {
    const newTask: Task = req.body;
    const foundName = findByName(newTask.taskname);
    if (!foundName) {
        console.log("Adding:", newTask);
        tasks.push(newTask);
        newTask.id = generateUniqueId();
        res.send({ tasks });
    } else {
        throw new Error('Name is already exist!');
    }
    return next();
}


function findByName(name: string) {
    if (name !== undefined && name !== null && name !== '') {
        const index = tasks.findIndex(element => element.taskname === name);
        if (index !== -1) {
            return tasks[index];
        } else {
            return null;
        }
    } else {
        throw new Error('Name is missing or empty');
    }
}
export function getAllTasks(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.send({ tasks });
    return next();
}

export function updateTaskName(req: express.Request, res: express.Response, next: express.NextFunction) {
    const { name } = req.params;
    const { taskname } = req.body;

    const taskToUpdate = findByName(name);

    if (taskToUpdate) {
        taskToUpdate.taskname = taskname;
        res.send({ tasks });
        console.log(`Updating (Patch) Name "${name}" to "${taskname}":`);
        console.log("Before:", taskToUpdate.taskname);
    } else {
        throw new Error("Task not found");
    }
    return next();
}
export function deleteTaskByID(req: express.Request, res: express.Response, next: express.NextFunction) {
    const taskid = req.params.id;
    const taskToDelete = findByID(parseInt(taskid));

    if (taskToDelete !== null) {
        tasks.splice(tasks.indexOf(taskToDelete), 1);
        res.send({ tasks });
        console.log(`Delete: "${taskid}":`);
    } else {
        throw new Error(`Task id:${taskid} not found`);
    }
    return next();
}


export function deleteTask(req: express.Request, res: express.Response, next: express.NextFunction) {
    const taskname = req.params.name;
    const taskToDelete = findByName(taskname);

    if (taskToDelete !== null) {
        tasks.splice(tasks.indexOf(taskToDelete), 1);
        res.send({ tasks });
        console.log(`Delete: "${taskname}":`);

    } else {
        throw new Error("Task not found");
    }

    return next();
}
export function replaceTask(req: express.Request, res: express.Response, next: express.NextFunction) {
    const taskname = req.params.name;
    const { taskname: newTaskName, description, status } = req.body;

    const newTask = {
        id: generateUniqueId(),
        taskname: newTaskName,
        description: description,
        status: status
    };
    const replace = findByName(taskname);
    const isTaskExist = tasks.some(existingTask => existingTask.taskname === newTask.taskname);
    if (isTaskExist) {
        throw new Error('Name is already exist');
    } else if (replace) {
        tasks.splice(tasks.indexOf(replace), 1, newTask);
        res.send({ tasks });
        console.log(`Replacing: "${taskname}: "${newTask.id}"" to  ${newTask.taskname}, ${newTask.description}, ${newTask.status}`);
    } else {
        throw new Error("Task not found");
    }
    return next();
}

export function changeStatus(req: express.Request, res: express.Response, next: express.NextFunction) {
    const name = req.params.name;
    const status: Status = req.body.status;

    const taskToUpdate = findByName(name)!;
    if (!taskToUpdate) {
        throw new Error('Name does not exist!');
    }

    taskToUpdate.status = status;
    res.send({ tasks });
    console.log(`Task: ${name} status changed to ${status}`);

    return next();
}

export function generateUniqueId() {
    const timestamp = new Date().getTime();
    const randomId = Math.floor(10000 + Math.random() * 90000);
    return timestamp + randomId;
}

function findByID(taskID: number) {
    const index = tasks.findIndex(task => task.id === taskID);
    if (index !== -1) {
        return tasks[index];
    } else {
        throw new Error('Cannot find id');
    }
}