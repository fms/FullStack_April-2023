import mongoose from "mongoose";

export async function connectToDatabase() {
    await mongoose.connect('mongodb://localhost/myTeam');
}

export function setDatabaseDefaults() {
    mongoose.set({
        toObject: {
            versionKey: false,
            transform: (doc, ret) => {
                delete ret._id;
            }
        }
    });
}