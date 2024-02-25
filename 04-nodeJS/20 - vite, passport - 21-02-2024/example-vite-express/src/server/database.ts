import mongoose from "mongoose";

export async function connectToDatabase() {
    await mongoose.connect('mongodb://localhost/todo');
}

export function setDatabaseDefaults() {
    // Set a default toObject() for all our schemas to rename '_id' to 'id'
    mongoose.set({
        toObject: {
            versionKey: false,
            transform: (doc, ret) => {
                ret.id = ret._id;
                delete ret._id;
            }
        }
    });
}