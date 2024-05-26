import express from "express";
import { getFilms, getFilmsByTitle } from "../controllers/filmsController";

const router = express.Router();

router.get("/", getFilms);
router.get("/title", getFilmsByTitle);

export default router;
