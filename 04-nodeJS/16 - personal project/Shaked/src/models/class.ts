import mongoose, { Schema, model } from "mongoose";

export class Queue {
    constructor(
        public name: string,
        public phonenumber: number,
        public city: City,
        public date: Date,
        public time: Time,
        ) {
    }
}

export class Time {
    constructor(public hours: number, public minutes: number) {
        }
}

export enum City {
    Gedera = "Gedera", 
    Ashdod = "Ashdod",
    Yavne = "Yavne"
}

const QueueSchema = new Schema({
    name: { type: String, required: true },
    phonenumber: { type: Number, required: true },
    city: { type: String, required: true },
    date: { type: Date, required: true },
    time: {
        hours: { type: Number, required: true },
        minutes: { type: Number, required: true }
    }
});

export const QueueModel = model<Queue>('Queue', QueueSchema);