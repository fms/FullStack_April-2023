import { body } from "express-validator";
import { Status } from "../models/class";
export const checkTaskName = [
  body('taskname').trim()
    .exists().withMessage('Taskname does not exist')
    .isString().withMessage('Taskname must be a string')
    .isLength({ min: 2, max: 12 }).withMessage('Taskname length must be between 2~12 characters')
];

export const checkDescription = [
  body('description').trim()
    .exists().withMessage('Description does not exist')
    .isString().withMessage('Description must be a string')
    .not().isEmpty().withMessage('Description must not be empty')
];

export const checkStatus = [
  body('status').trim()
    .exists().withMessage('Status does not exist')
    .isIn(Object.values(Status)).withMessage('Invalid status value')
];

export const checkID = [
  body('id')
    .trim().exists().not().isEmpty().withMessage('ID must not be empty')
    .isInt().withMessage('ID must be an integer')
]
export const createTaskSchema = [
  checkID,
  checkTaskName,
  checkDescription,
  checkStatus
];