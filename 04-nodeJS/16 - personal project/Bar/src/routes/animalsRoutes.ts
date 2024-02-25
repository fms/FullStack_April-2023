<<<<<<< HEAD
import express from "express";
import * as Controller from "../controller/animalsController";
import { checkExact, oneOf } from "express-validator";
import * as Validation from "../validation/animalsValidationSchema";
import { validate } from "../validation/validationSchema";

const animalRouter = express.Router();

animalRouter.get("/get", Controller.getAnimals);

animalRouter.post(
  "/post",
  checkExact(Validation.animalDetails),
  validate,
  Controller.addAnimal,
  Controller.getUserAnimals
);

animalRouter.delete(
  "/delete",
  checkExact(Validation.validateId),
  validate,
  Controller.deleteAnimal,
  Controller.getUserAnimals
);

animalRouter.patch(
  "/update",
  oneOf([Validation.validateAge, Validation.validateName, Validation.validateSpecies]),
  validate,
  Controller.updateAnimal,
  Controller.getUserAnimals
);

animalRouter.get("/find", Controller.getUserAnimals);

export default animalRouter;
=======
import express from "express";
import * as Controller from "../controller/animalsController";
import { checkExact, oneOf } from "express-validator";
import * as Validation from "../validation/animalsValidationSchema";
import { validate } from "../validation/validationSchema";

const animalRouter = express.Router();

animalRouter.get("/get", Controller.getAnimals);

animalRouter.post(
  "/post",
  checkExact(Validation.animalDetails),
  validate,
  Controller.addAnimal,
  Controller.getUserAnimals
);

animalRouter.delete(
  "/delete",
  checkExact(Validation.validateId),
  validate,
  Controller.deleteAnimal,
  Controller.getUserAnimals
);

animalRouter.patch(
  "/update",
  oneOf([Validation.validateAge, Validation.validateName, Validation.validateSpecies]),
  validate,
  Controller.updateAnimal,
  Controller.getUserAnimals
);

animalRouter.get("/find", Controller.getUserAnimals);



export default animalRouter;
>>>>>>> bb9afe650506d632e6a7be55ddc8da48ea93bc45
