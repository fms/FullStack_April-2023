import { Task } from "../model/taskModel";
import {User} from "../model/userModel"
import { NextFunction, Request, Response } from "express";

const tasks: Task[] = [];
const users: User[] = [];

export function getUsers (req: Request, res: Response ,next: NextFunction){
 res.send({users});
next();
}

export function createUser(req: Request, res: Response ,next: NextFunction){

  if (!("username" in req.body && "email" in req.body)){
    throw new Error ("missing details");
  }

  const {username,email}:User = req.body;
  const user = new User(crypto.randomUUID(),username, email);
  users.push(user);
  next();
}

export function getUserTasks(req: Request, res: Response, next: NextFunction) {
  const userId = req.params.userId;
  const userTasks = tasks.filter(task => task.userId === userId);

  res.send({ tasks: userTasks });
  next();
}

export function getTasks(req: Request, res: Response ,next: NextFunction) {
  res.send({ tasks });  
  next();
}

export function createTask(req: Request, res: Response ,next: NextFunction) {
  if (!('title' in req.body && 'description' in req.body)) {
    throw new Error("Missing properties");
}

  const { title, description, userId }: Task = req.body;
  const newTask = new Task(title, description, false, userId);
  tasks.push(newTask);
  next();
}

export function updateTaskBody(req: Request, res: Response ,next: NextFunction) {
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
        if (!(typeof newStatus !== 'boolean')) {
            throw new Error("Invalid new status");
        }

        tasks[taskIndex].status = newStatus;
        changed = true;
    }

    if (!changed) {
        throw new Error("Nothing to update!");
    }

    next();
}

export function overwriteTaskQuery(req: Request, res: Response ,next: NextFunction) {
  const { id } = req.params;
    const taskIndex = getTaskById(id);
    let changed = false;

    if ('title' in req.body && 'description' in req.body ) {
      const newTask = new Task(req.body.title, req.body.description,req.body.status, req.body.userId)
      
        tasks[taskIndex].title = req.body.title;
        changed = true;
        tasks.splice(taskIndex, 1, newTask);
    }
    if (!changed) {
        throw new Error("Nothing to update!");
    }

  next();
}

export function updateTaskStatus(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;
    const taskIndex = getTaskById(id);
    let changed = false;

    if ('status' in req.body) {
      const newStatus = req.body.status;


      tasks[taskIndex].status = newStatus;
      changed = true;
  }

    if (!changed) {
        throw new Error("Nothing to update!");
    }

  next();
}

export function deleteTask(req: Request, res: Response ,next: NextFunction) {
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