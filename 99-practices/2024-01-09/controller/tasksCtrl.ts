
import express from 'express';
import { taskList } from './../model/tasks';

export function getAllTasks(req:express.Request, res:express.Response) {
    try {
        res.send({ok: true, tasks: taskList})
    } catch (error) {
        res.status(500).send({ok: false, error})
    }
}

export function getTaskByID(req, res) {
    try {
        // const params = req.params
        const {id} = req.params
        if (!id) throw new Error("no id in FUNCTION getTaskByID in FILE tasksRoutes.ts");

        const task = taskList.find((task) => task.id == Number(id))
        if (!task) throw new Error("No tasks found.")

        res.send({ok: true, task})

    } catch (error) {
        res.status(500).send({ok: false, error: error.message})
    }
}