import { body} from 'express-validator';

export const nickNameValidation =
    body("nickName").trim()
    .notEmpty().withMessage("nickName cannot be empty")
    .matches(/^[^\u0080-\uFFFF]+$/).withMessage("nickName must not contain Unicode characters")
    .isLength({min:2}).withMessage("name must be more then 2 letters")
    .escape();


export const levelValidation = 
body("level").trim()
.notEmpty().withMessage("level cannot be empty")
.matches(/^[a-zA-Z]+$/).withMessage("level must not contain string")
.matches(/^[^\u0080-\uFFFF]+$/).withMessage("level must not contain Unicode characters")
.isInt({ min: 1, max: 100 }).withMessage("level must be between 1 and 100 characters long");

export const classsValidation = 
body("classs").trim()
.notEmpty().withMessage("class cannot be empty")
.matches