import mongoose, { mongo } from "mongoose";
import request from "supertest";
import { createServer } from "../src/server";
import { setDataBaseDefaults } from "../src/database";
import { MongoMemoryServer } from "mongodb-memory-server";

const app = createServer();

describe("app", () => {
  let mongoServer: MongoMemoryServer;

  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());
    setDataBaseDefaults();
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoose.connection.close();
    if (mongoServer) {
      await mongoServer.stop();
    }
  });

  describe("First initilization", () => {
    test("Array of animals should be empty", async () => {
      const { status, body } = await request(app).get("/api/animals/get");

      expect(status).toBe(200);
      expect(body).toEqual({ animals: [] });
    });
  });

  const animalToAdd = { name: "firstAnimal", age: 8, species: "fish" };

  describe("Adding animal", () => {
    test("Array should contain one animal", async () => {
      const { status, body } = await request(app).post("/api/animals/post").send(animalToAdd);

      expect(status).toBe(200);
      const expectedAnimalWithoutId = { ...animalToAdd, _id: expect.any(String) };
      expectedAnimalWithoutId._id = body.animals[0]._id;
      expect(body.animals).toContainEqual(expectedAnimalWithoutId);
    });

    test("Empty name field", async () => {
      const { status, body } = await request(app).post("/api/animals/post").send({
        name: "",
        age: 2,
        species: "mammal",
      });
      expect(status).toBe(500);
      expect(body.errors).toContainEqual("Must be a name");
    });
    test("Empty age field", async () => {
      const { status, body } = await request(app).post("/api/animals/post").send({
        name: "name",
        age: 0,
        species: "mammal",
      });
      expect(status).toBe(500);
      expect(body.errors).toContainEqual("Age must be greater than 0");
    });
    test("Empty species field", async () => {
      const { status, body } = await request(app).post("/api/animals/post").send({
        name: "name",
        age: 2,
        species: "",
      });
      expect(status).toBe(500);
      expect(body.errors).toContainEqual("There are no species with less than 4 characters");
    });
  });
});
