import mongoose, { Schema, model } from 'mongoose';


export enum status {
    ToDo = "To Do",
    Done = "Done"
}

export interface task {
    _id: any;
    id: string;
    // id: string;
    title: string,
    description: string,
    status: status
}

const TaskSchema = new Schema({
    title: {
        type: String,
        require: true,
        minLength: 5
    },
    description: {
        type: String,
        require: true,
        minLength: 5
    }, 
    status:{
        type: String,
        enum: [status.ToDo, status.Done],
        default: status.ToDo
    }
})

export const TaskModel = mongoose.model("task", TaskSchema);