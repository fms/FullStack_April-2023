import { Schema, model } from "mongoose";

export class User {
  constructor(public username: string, public password: string) {}
}

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export const userModel = model("Users", userSchema);
