import mongoose from "mongoose";

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