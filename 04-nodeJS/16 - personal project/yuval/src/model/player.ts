import { Person } from "./person";
import { Position } from "./position";
import { Schema, model } from "mongoose";

export class Player {
    constructor(
        public person: Person,
        public jerseyNumber: number,
        public height: number,
        public position: Position){}
}

const PlayerSchema = new Schema({
    person: {
        type: new Schema({
            firstName: String,
            lastName: String,
            age: Number
        }),
        required: true
    },

    jerseyNumber: {
        type: Number,
        required: true
    },

    height: {
        type: Number,
        required: true
    },

    position: {
        type: Number,
        enum: [Position.PG, Position.SG, Position.SF, Position.PF, Position.C],
        required: true
    }
});

export const PlayerModel = model("Players", PlayerSchema);


