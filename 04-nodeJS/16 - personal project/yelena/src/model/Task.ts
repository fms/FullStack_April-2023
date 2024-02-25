import { TaskStatus } from "./TaskStatus";
import { Schema, model } from "mongoose";

export class Task {
    id: string;

    constructor(public task: string,
        public status: TaskStatus) {
        this.id = `${Date.now().toFixed()}-${Math.random().toString().substring(2)}`;
    }
}

const TaskSchema = new Schema({
    task: {
        type: String,
        required: true,
        minLength: 2
    },
    status: {
        type: String,
        enum: [TaskStatus.done, TaskStatus.todo],
        default: TaskStatus.todo
    }
})

export const TaskModel = model("tasks", TaskSchema);

