import express from 'express';
import { TaskModel } from '../modules/task';
import { task } from '../modules/task';
import { status } from '../modules/task'

export let Tasks: task[] = [];

export async function creatTask(req: express.Request, res: express.Response) {
    let newTaskData: task = req.body;
    newTaskData.status = status.ToDo;
    try { 
        const newTask = new TaskModel(newTaskData);
        await newTask.save();
        res.send({ task: newTask });
    } catch (error: any) {
        console.error('Error:', error.message);
    }
}

export async function updateTask(req: express.Request, res: express.Response) {
    const {id} = req.params;
    const {title, description, status} = req.body;
    try {
        const updateTask = await TaskModel.findByIdAndUpdate(id, {title, description, status});
        if (updateTask) {
            console.log(`task ${id} was updated`);
        }
        res.json(updateTask);
    } catch (error: any) {
        console.error('Error:', error.message);
    }
}

export async function getTasks(req: express.Request, res: express.Response) {
    try {
        const taskList = await TaskModel.find();
        if (!taskList || taskList.length === 0) {
            res.status(404).send({ message: 'Tasks not found' });
        } else {
            res.send(taskList);
        }
    } catch (error: any) {
        console.error('Error', error.message);
        res.status(500).send('Internal Server Error');
    }
}

export function getTask(req: express.Request, res: express.Response) {
    let TaskToGet = req.params.id;
    let foundTask = Tasks.find(task => task.id === TaskToGet);
    if (!foundTask) {
        res.status(404).send('Task not found');
    } else {
        res.send(foundTask);
    }
}

export async function deleteTask(req: express.Request, res: express.Response) {
    let {id} = req.params;
    try {
        const deleteTask = await TaskModel.findByIdAndDelete(id);
        if (deleteTask) {
            console.log(`task ${id} was deleted`);
        }
        res.json(deleteTask);
    } catch (error: any) {
        console.error('Error:', error.message);
    }

}