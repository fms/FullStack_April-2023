import { body } from "express-validator";

export const validateId = body("id", "ID must be specified").trim().not().isEmpty();

export const validateName = body("name")
  .trim()
  .not()
  .isNumeric()
  .withMessage("Name cannot be numeric")
  .notEmpty()
  .withMessage("Must be a name")
  .escape();

export const validateAge = body("age")
  .trim()
  .isNumeric()
  .withMessage("Age must be numeric")
  .notEmpty()
  .isInt({ min: 1 })
  .withMessage("Age must be greater than 0")
  .escape();

export const validateSpecies = body("species")
  .trim()
  .isLength({ min: 4 })
  .withMessage("There are no species with less than 4 characters")
  .notEmpty()
  .withMessage("Must be a species")
  .escape();
