import express from "express";
import {
  getAll,
  getById,
  createActor,
  deleteActor,
  updateActor,
  getActorsByFilm,
} from "../controllers/actorsController";

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getById);
router.get("/query/:id", getActorsByFilm);
router.post("/", createActor);
router.delete("/:id", deleteActor);
router.patch("/:id", updateActor);

export default router;
