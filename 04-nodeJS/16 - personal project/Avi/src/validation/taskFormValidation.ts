import { body } from "express-validator";

export const titleValidator = body("title").trim()
    .notEmpty().withMessage("the title can't be empty!")
    .isLength({ min: 4 }).withMessage("The title should be 4 characters minimum")

export const descriptionValidator = body("description").trim()
    .notEmpty().withMessage("the description can't be empty!")
    .isLength({ min: 8 }).withMessage("The description should be 8 characters minimum")
    .isLength({ max: 20 }).withMessage("Description can be 20 characters max")

export const TaskValidation = [
    titleValidator,
    descriptionValidator
];
