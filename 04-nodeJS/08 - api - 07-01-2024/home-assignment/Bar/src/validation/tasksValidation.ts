import { body } from 'express-validator';

export const titleValidation = body("title").trim().notEmpty().isLength({min : 5}).withMessage("Title must be 5 characters at least").escape();

export const descriptionValidation = body("description").trim().notEmpty().withMessage("Desctiption must be filled").escape();

export const statusValidation = body ("status").exists();

export const idValidation = body('id', 'The task ID must be specified').trim().not().isEmpty();

export const addTaskSchema = [
    titleValidation,
    descriptionValidation
];

export const updateTaskSchema = [
    idValidation,
]