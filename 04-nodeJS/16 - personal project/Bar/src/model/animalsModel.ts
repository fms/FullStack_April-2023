import { Schema, model } from "mongoose";

export class Animal {
  constructor(public name: string, public age: number, public species: string, public ownerId: Schema.Types.ObjectId) {}
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
  ownerId: { type: Schema.Types.ObjectId, ref: "Users" },
});

export const animalModel = model("Animal", animalSchema);
