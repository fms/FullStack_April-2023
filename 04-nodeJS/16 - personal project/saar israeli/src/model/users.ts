import  { Schema, model } from 'mongoose';

export class User {
    constructor(
        public fullName: string,
        public email: string,
        public password: string,
    ) {

    }
}

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    fullName: {
        type: String,
        required: true,
    }
})


export const UserModel = model("user", userSchema);
