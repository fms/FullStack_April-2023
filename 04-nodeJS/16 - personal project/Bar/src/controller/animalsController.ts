import { Animal, animalModel } from "../model/animalsModel";
import { NextFunction, Request, Response } from "express";
import { matchedData } from "express-validator";
import { isValidObjectId } from "mongoose";

export async function getAnimals(req: Request, res: Response, next: NextFunction) {
  const animals = (await animalModel.find()).map((animal) => animal.toObject());

  res.send({ animals: animals });
}

export async function addAnimal(req: Request, res: Response, next: NextFunction) {
  const { name, age, species }: Animal = req.body;
  const animal = new animalModel({ name, age, species });

  console.log(animal);

  await animal.save();

  next();
}

export async function deleteAnimal(req: Request, res: Response, next: NextFunction) {
  const { id } = req.body;

  const animal = await getAnimalById(id);
  await animal.deleteOne();
  next();
}

export async function updateAnimal(req: Request, res: Response, next: NextFunction) {
  const { id } = req.body;
  const animal = await getAnimalById(id);

  let changed = false;

  const payload = matchedData(req);
  if ("name" in payload) {
    animal.name = payload.name;
    changed = true;
  }

  if ("age" in payload) {
    animal.age = payload.age;
    changed = true;
  }

  if ("species" in payload) {
    animal.species = payload.species;
    changed = true;
  }

  if (!changed) {
    throw new Error("There is nothing to update");
  }

  animal.save();
  next();
}

async function getAnimalById(id: string) {
  if (isValidObjectId(id)) {
    const animal = await animalModel.findById(id);

    if (animal) {
      return animal;
    }
  }
  throw new Error("No existing animal with specified ID");
}
