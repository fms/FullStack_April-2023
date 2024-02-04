import { NextFunction, Request, Response } from "express";
import { Task, TaskModel } from "../model/Task";
import { matchedData } from "express-validator";

// Read
export async function getTasks(req: Request, res: Response, next: NextFunction) {
    const tasks = (await TaskModel.find()).map(task => task.toObject());
    // return {
    //     id: task._id,
    //     title: task.title,
    //     description: task.description,
    //     status: task.status,
    //     alias: task.alias,
    // }
    // );
    res.send({ tasks });
    next();
}

// Create
export async function addTask(req: Request, res: Response, next: NextFunction) {
    const { title, description }: Task = req.body;
    const newTask = new TaskModel({title, description});
    await newTask.save();
    next();
}

// Update
export async function updateTask(req: Request, res: Response, next: NextFunction) {
    const { id } = req.body;
    const task = await getTaskById(id);
    
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
        task.status = payload.status;
        changed = true;
    }

    if ('title' in payload) {
        task.title = payload.title;
        changed = true;
    }

    if ('description' in payload) {
        task.description = payload.description;
        changed = true;
    }


    if (!changed) {
        throw new Error("Noting to update!");
    }

    task.save();
    next();
}

// Delete
export async function deleteTask(req: Request, res: Response, next: NextFunction) {
    const { id } = req.body;
    // Try to delete using the ID. The deleted object is returned, or null if not found.
    const task = await getTaskById(id);
    await task.deleteOne();
    next();
}

async function getTaskById(id: string) {
    if (isValidObjectId(id)) {
        const task = await TaskModel.findById(id);
        if (task) {
            return task;
        }
    }

    throw new Error("Can't find a task for the specified ID");
}
