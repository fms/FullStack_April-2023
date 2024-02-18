import { body, checkExact } from 'express-validator';
import { TaskStatus} from '../model/TaskStatus'


export const titleValidation = body('title').trim()
                                            .notEmpty().withMessage("Title must always be specified")
                                            .isLength({ min: 5 }).withMessage("Title must be at least 5 characters")
                                            .escape();


export const descriptionValidation = body('description').trim()
                                                        .notEmpty().withMessage("Description must always be specified")
                                                        .escape();


export const statusValidation = body('status').exists()
                                              .isIn(Object.values(TaskStatus)).withMessage("Invalid status");
export const idValidation = body('id', 'The task ID must be specified').trim().not().isEmpty();



export const addTaskSchema = [
    titleValidation,
    descriptionValidation
];



export const updateTaskSchema = [
    idValidation,
]

