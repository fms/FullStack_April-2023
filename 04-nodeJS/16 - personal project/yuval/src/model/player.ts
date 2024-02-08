import { Person, PersonModel } from "./person";
import { Position } from "./position";
import { Schema, model, Document } from "mongoose";

// export class Player {
//     constructor(
//         public person: Person,
//         public jerseyNumber: number,
//         public height: number,
//         public position: Position){}
// }

export interface Player extends Document {
    personId: string,
    person: Person,
    jerseyNumber: number,
    height: number,
    position: Position
}

const PlayerSchema = new Schema({
    personId: {
        type: Schema.Types.ObjectId,
        ref: 'Person',
        required: true
    },

    person: {
        type: Schema.Types.ObjectId,
        ref: 'Person',
        // default: { firstName: "firstName", lastName: "lastName", age: 0} 
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


