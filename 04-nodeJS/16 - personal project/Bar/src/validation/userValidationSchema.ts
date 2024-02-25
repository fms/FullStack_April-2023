import { body } from "express-validator";

export const validateId = body("id", "ID must be specified").trim().not().isEmpty();

export const validateUsername = body("username")
  .trim()
  .not()
  .isNumeric()
  .withMessage("Username cannot be numeric")
  .notEmpty()
  .withMessage("Username is missing")
  .escape();

export const validatePassword = body("password")
  .trim()
  .isLength({ min: 4 })
  .withMessage("Password is less than 4 characters")
  .notEmpty()
  .withMessage("Password is missing")
  .escape();
