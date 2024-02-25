import { body } from 'express-validator';
import { Position } from '../model/position'

export const nameValidation = 
    body('name').trim()
                    .notEmpty()
                    .withMessage("Name must always be specified")
                    .escape();

export const ageValidation =
    body('age').trim()
                    .notEmpty()
                    .withMessage("Age must always be specified")
                    .isInt({ min: 18 })
                    .withMessage("Age must be a number greater than or equal to 18")
                    .toInt()

export const jerseyNumberValidation = 
    body('jerseyNumber').trim()
                    .notEmpty()
                    .withMessage("Jersey number must always be specified")
                    .isInt({ min: 0, max: 99})
                    .withMessage("Jersey number must be a number between 0 and 99")
                    .toInt();

export const heightValidation = 
    body('height').trim()
                    .notEmpty()
                    .withMessage("Height must always be specified")
                    .isInt({ min: 160, max: 230})
                    .withMessage("The height of a player must be a number between 160 and 230")
                    .toInt();

export const positionValidation = 
    body('position').exists()
                    .withMessage("Position must always be specified")
                    .isIn(Object.values(Position))
                    .withMessage("Invalid position");

export const addPlayerSchema = [
    nameValidation,
    ageValidation,
    jerseyNumberValidation,
    heightValidation,
    positionValidation
];

export const updatePlayerSchema = [
    nameValidation
];

// export const personValidation = [
//     body('firstName').trim()
//                 .notEmpty()
//                 .withMessage("First name must always be specified")
//                 .escape(),
//     body('lastName').trim()
//                 .notEmpty()
//                 .withMessage("Last name must always be specified")
//                 .escape(),
//     body('age').trim()
//                 .notEmpty()
//                 .withMessage("Age must always be specified")
//                 .isInt({ min: 18 })
//                 .withMessage("Age must be a number greater than or equal to 18")
//                 .toInt()
// ];