import { Schema, model } from "mongoose";

export interface Person {
    firstName: string,
    lastName: string,
    age: number
}

const personSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
});

export const PersonModel = model("People", personSchema);