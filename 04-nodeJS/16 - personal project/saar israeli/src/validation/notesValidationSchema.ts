import { body } from 'express-validator';
import { isValidObjectId ,ObjectId} from 'mongoose';
import { NotesModel } from '../model/notes';


export const titleValidation = body('title').trim().notEmpty().withMessage("Title cannot be empty").isLength({ max: 20 }).withMessage("Title cannot be more then 20 char").escape();


export const descriptionValidation = body('description').trim().escape();

export const idValidation = body('id', 'The task ID must be specified').trim().not().isEmpty().custom(async (_id: ObjectId) => {
    if(!isValidObjectId(_id)){
        throw new Error('invalid Id');
    }
    const existingUser =
        await NotesModel.findById({ _id });
    if (!existingUser) {
        throw new Error('Id not found');
    }
}).escape();


export const noteOwnerValidation = body('noteOwner').trim().notEmpty().withMessage("noteOwner cannot be empty").escape();

export const addNoteSchema = [
    titleValidation,
    descriptionValidation,
];

export const updateNoteTitleSchema = [
    idValidation,
    titleValidation
]

export const updateNoteDescriptionSchema = [
    idValidation,
    descriptionValidation
]
