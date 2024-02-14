import mongoose from "mongoose";

export async function connectToDatabase() {
  await mongoose.connect("mongodb://localhost:27017");
  console.log("Logged in to database");
}

export function setDataBaseDefaults() {
  mongoose.set({
    toObject: {
      versionKey: false,
    },
  });
}
