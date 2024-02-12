import mongoose from "mongoose";
// import { Player, PlayerModel } from "./model/player";
// import { Person } from "./model/person";

export async function connectToDatabase() {
    await mongoose.connect('mongodb://localhost/MyTeam');
}


export function setDatabaseDefaults() {
    mongoose.set({
        toObject: {
            versionKey: false,
        }
    });
}