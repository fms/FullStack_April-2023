import { Schema, model } from "mongoose";

export class Note {
    constructor(public title:string , public description :string , public noteOwner? :Schema.Types.ObjectId) {
    }
}


const notesSchema = new Schema ({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    noteOwner: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Users'
    }
})

export const NotesModel = model("Notes",notesSchema);