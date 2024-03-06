import { body } from "express-validator";

export const checkUserName = [
  body('username').trim()
    .exists().withMessage('Username does not exist')
    .isString().withMessage('Name must be a string')
    .isLength({ min: 2, max: 12 }).withMessage('Username length must be between 2~12 characters')
];
export const checkPassword = [
  body('password').trim()
    .exists().withMessage('Password does not exist')
    .isLength({ min: 2, max: 12 }).withMessage('Password length must be between 2~12 characters')
];



export const createUserSchema = [
  checkUserName,
  checkPassword
];