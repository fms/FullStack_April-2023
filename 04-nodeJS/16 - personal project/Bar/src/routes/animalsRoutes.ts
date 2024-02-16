import express from "express";
import * as Controller from "../controller/animalsController";
import { checkExact, oneOf } from "express-validator";
import * as Validation from "../validation/animalsValidationSchema";
import { validate } from "../validation/validationSchema";

const router = express.Router();

router.get("/get", Controller.getAnimals);

router.post(
  "/post",
  checkExact([Validation.validateAge, Validation.validateName, Validation.validateSpecies]),
  validate,
  Controller.addAnimal,
  Controller.getAnimals
);

router.delete("/delete", checkExact(Validation.validateId), validate, Controller.deleteAnimal, Controller.getAnimals);

router.patch(
  "/update",
  oneOf([Validation.validateAge, Validation.validateName, Validation.validateSpecies]),
  validate,
  Controller.updateAnimal,
  Controller.getAnimals
);

export default router;
