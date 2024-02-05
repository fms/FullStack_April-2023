import { TaskStatus } from "./TaskStatus";
import { Schema, model } from "mongoose";

export class Task {
    id: string;

    constructor(public title: string,
        public description: string,
        public status: TaskStatus) {
        this.id = `${Date.now().toFixed()}-${Math.random().toString().substring(2)}`;
    }
}

const TaskSchema = new Schema({
    title: {
        type: String,
        required: true,
        minLength: 5
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        enum: [TaskStatus.done, TaskStatus.todo],
        default: TaskStatus.todo
    }
// }
// , {
//     // An override to the global (mongoose level) toObject():
//     toObject: {
//         versionKey: false,
//         transform: (doc, ret) => {
//             ret.id = ret._id;
//             // delete ret._id;
//         }
//     }
})

export const TaskModel = model("Tasks", TaskSchema);

