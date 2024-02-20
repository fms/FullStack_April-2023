import mongoose from "mongoose";
export async function connectToDatabase() {
    await mongoose.connect('mongodb://localhost/noteList');
}

export function setDatabaseDefaults() {
    mongoose.set({
        toObject: {
            versionKey: false,
            transform: (doc,ret) => {
                ret.id = ret._id;
                delete ret._id;
            }
        }
    })
}