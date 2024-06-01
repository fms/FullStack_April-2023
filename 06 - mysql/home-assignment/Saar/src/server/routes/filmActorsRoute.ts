import express from "express";
import { getActorsByFilmId } from "../controllers/filmActors";

const router = express.Router();

router.get("/:filmName", getActorsByFilmId);

export default router;
