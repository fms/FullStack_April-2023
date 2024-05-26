import express from "express";
import { getFilms, getFilmsByDetails } from "../controllers/filmsController";

const router = express.Router();

router.get("/", getFilms);
router.get("/query", getFilmsByDetails);

export default router;
