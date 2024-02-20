import { body, checkExact } from 'express-validator';
import { TaskStatus} from '../model/TaskStatus'

// Some demonstrations of validation:
// 1. Individual validation rules (ValidationChain) for a single field at a time:

// 1.1. Title: a required field at least 5 characters in length. Issues a custom message for each condition.
//             The value is trimmed (spaces removed) and escaped since it's returned to the frontend.
export const titleValidation = body('title').trim()
                                            .notEmpty().withMessage("Title must always be specified")
                                            .isLength({ min: 5 }).withMessage("Title must be at least 5 characters")
                                            .escape();

// 1.2 Description: A required field with a custom error message.
//                  The value is trimmed (spaces removed) and escaped since it's returned to the frontend.
export const descriptionValidation = body('description').trim()
                                                        .notEmpty().withMessage("Description must always be specified")
                                                        .escape();
// 1.3 Status: A required field. The value must be a valid value for the TaskStatus enum.
export const statusValidation = body('status').exists()
                                              .isIn(Object.values(TaskStatus)).withMessage("Invalid status");
export const idValidation = body('id', 'The task ID must be specified').trim().not().isEmpty();

// 2. Multiple Validation rules, to be used as a schema
// 2.1. addTask: Validate the title and the description
export const addTaskSchema = [
    titleValidation,
    descriptionValidation
];

// 2.2 updateTask: Validate the ID (extra rules are in the router)
export const updateTaskSchema = [
    idValidation,
]

