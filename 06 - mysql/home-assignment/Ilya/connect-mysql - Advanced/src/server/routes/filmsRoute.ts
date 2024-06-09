import express from "express";
import { getAll, getFiltered, getFilmActors } from "../controllers/filmsController";

const router = express.Router();

router.get("/", getAll);
router.get("/filtered", getFiltered);
router.get("/:filmId/actors", getFilmActors);


export default router;