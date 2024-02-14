import { randomUUID } from "crypto";
import { Schema, model } from "mongoose";

export class Animal {
  constructor(public name: string, public age: number, public species: string) {}
}

const animalSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  species: {
    type: String,
    required: true,
  },
});

export const animalModel = model("Animals", animalSchema);
