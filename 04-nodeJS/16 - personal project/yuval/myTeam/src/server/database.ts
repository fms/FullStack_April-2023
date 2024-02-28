import mongoose from "mongoose";

export async function connectToDatabase() {
    // const uri = process.env.MONGODB_URI || 'mongodb://localhost/MyTeam';
    // await mongoose.connect(uri);
    await mongoose.connect('mongodb://localhost/MyTeam');
}

export function setDatabaseDefaults() {
    mongoose.set({
        toObject: {
            versionKey: false,
        }
    });
}