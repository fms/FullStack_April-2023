import express from "express";
import { getAll, getById, createActors, deleteActor, updateActor } from "../controllers/actorsController";

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getById);
router.post("/", createActors);
router.delete("/:id", deleteActor);
router.patch("/:id", updateActor);

export default router;
