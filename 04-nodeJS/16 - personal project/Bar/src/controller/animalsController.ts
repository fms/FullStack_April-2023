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
  console.log(name);

  const ownerId = req.cookies.userId;

  const animal = new animalModel({ name, age, species, ownerId });

  console.log(animal);

  await animal.save();

  next();
}

export async function deleteAnimal(req: Request, res: Response, next: NextFunction) {
  const { id } = req.body;

  const animal = await getAnimalById(id);
  if (animal) {
    await animal.deleteOne();
  }
  next();
}

export async function updateAnimal(req: Request, res: Response, next: NextFunction) {
  const { id } = req.body;
  const animal = await getAnimalById(id);
  if (animal) {
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
  }
  next();
}

export async function getUserAnimals(req: Request, res: Response, next: NextFunction) {
  const userId = req.cookies.userId;

  if (userId) {
    const animals = (await animalModel.find({ ownerId: userId })).map((animal) => animal.toObject());
    console.log(animals);

    res.send({ animals });
    next();
  } else {
    return res.status(400).json({ error: "invalid animals" });
  }
}

async function getAnimalById(id: string) {
  if (!isValidObjectId(id)) {
    console.log("Invalid ID");
  }
  const animal = await animalModel.findById(id);
  return animal;
}
