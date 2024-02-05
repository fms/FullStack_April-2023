import { body } from 'express-validator';

export const addUserSchema = [
    body('username').exists().isEmail()
];