import express from "express";
import { getAll, getById, createActor, deleteActor, updateActor } from "../controllers/actorController";

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getById);
router.post("/", createActor);
router.delete("/:id", deleteActor);
router.patch("/:id", updateActor);

export default router;
