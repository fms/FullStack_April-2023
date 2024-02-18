import { NextFunction, Request, Response } from "express";
import { Note, NotesModel } from "../model/notes";
import { matchedData } from "express-validator";
import { isValidObjectId } from 'mongoose';


export async function getNote(req: Request, res: Response, next: NextFunction) {
    const notes = (await NotesModel.find()).map(note => note.toObject());
    res.send({ notes });
    next();
}

export async function addNote(req: Request, res: Response, next: NextFunction) {
    const { title, description }: Note = req.body;
    const noteOwner = req.cookies.userId;
    const newNote = new NotesModel({ title, description, noteOwner });
    await newNote.save();

    next();
}

export async function getMyNotes(req: Request, res: Response, next: NextFunction) {
    const userId = req.cookies.userId;
    if(userId) {
        const notes = (await NotesModel.find({noteOwner: userId})).map(note => note.toObject());
        res.send({notes});
        next();
    }
    else {
        return res.status(400).json({error: "none"})
    }
}

export async function updateNote(req: Request, res: Response, next: NextFunction) {
    const { id } = req.body;
    const note = await getNoteById(id);
    if (note) {
        const payload = matchedData(req);
        if ((note.title === payload.title) && (note.description === payload.description)) {
            return res.status(400).json({ error: 'Nothing to update' });
        }

        if ("title" in payload) {
            note.title = payload.title;
        }

        if ("description" in payload) {
            note.description = payload.description;
        }
        await note.save();
    }
    else {
        console.log('Id not found')
    }
    next();
}


export async function deleteNote(req: Request, res: Response, next: NextFunction) {
    const { id } = req.body;

    const note = await getNoteById(id);

    if (note) {
        await note.deleteOne();

        next();
    }
}


async function getNoteById(id: string) {
    if (!isValidObjectId(id)) {
        console.log('invalid id');
    }
    const note = await NotesModel.findById(id);
    return note;
}

export async function findNote(req: Request, res: Response, next: NextFunction) {
    const { id } = req.body;
    if (id) {
        const note = (await NotesModel.findById(id))?.toObject();
        res.send({ note });
        next();
    }
    else {
        return res.status(400).json({ error: "none" })
    }
}