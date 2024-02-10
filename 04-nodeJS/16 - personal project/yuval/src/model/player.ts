// import { Person, PersonModel } from "./person";
import { Position } from "./position";
import { Schema, model, Document } from "mongoose";

export interface Player extends Document {
    // personId: string,
    // person: Person,
    name: string,
    age: number,
    jerseyNumber: number,
    height: number,
    position: Position
}

const PlayerSchema = new Schema({
    // personId: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Person',
    //     required: true
    // },

    // person: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Person',
    //     // default: { firstName: "firstName", lastName: "lastName", age: 0} 
    // },

    name: {
        type: String,
        required: true
    },

    age: {
        type: Number,
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

async function isLimitReached(maxLimit: number): Promise<boolean> {
    const count = await PlayerModel.countDocuments();
    return count >= maxLimit;
}

PlayerSchema.pre('save', async function(this: Player, next) {
    const maxLimit = 15;
    if (await isLimitReached(maxLimit)) {
        const error = new Error('You have enough players') as any;
        return next(error);
    }
    next();
});

export const PlayerModel = model("Players", PlayerSchema);


