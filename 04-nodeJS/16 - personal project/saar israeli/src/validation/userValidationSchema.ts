import { body } from 'express-validator';
import { UserModel } from '../model/users';
import { ObjectId } from 'mongoose';
import { isValidObjectId } from 'mongoose';


export const emailValidation = body('email').trim()
    .isEmail().withMessage("Invalid Email")
    .notEmpty().withMessage("Email cannot be empty").custom(async (email: string) => {
        const existingUser =
            await UserModel.findOne({ email });
        if (existingUser) {
            throw new Error('Email already in use')
        }
    })
    .escape()

export const passwordValidation = body('password').trim().notEmpty().withMessage("Password cannot be empty")
    .isLength({ min: 6 }).withMessage("Password must be at least 6 characters").escape();

export const fullNameValidation = body('fullName').notEmpty().withMessage("full name cannot be empty").escape();

export const idValidation = body('userId', 'The task ID must be specified').trim().not().isEmpty().custom(async (_id: ObjectId) => {
    if(!isValidObjectId(_id)){
        throw new Error('invalid Id');
    }
    const existingUser =
        await UserModel.findById({ _id });
    if (!existingUser) {
        throw new Error('Id not found');
    }
}).escape();



export const emailUpdateValidation = body('email').trim()
    .isEmail().withMessage("Invalid Email")
    .notEmpty().withMessage("Email cannot be empty").escape();


export const registerUserSchema = [
    emailValidation,
    passwordValidation,
    fullNameValidation,
];




export const updateUserSchema = [
    emailUpdateValidation,
    passwordValidation,
    fullNameValidation,
    idValidation,
]
