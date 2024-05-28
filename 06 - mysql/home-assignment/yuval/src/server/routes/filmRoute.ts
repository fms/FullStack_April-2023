import express from "express";
import { getActorsFromFilm, getAll, getFiltered } from "../controllers/filmsController";

const router = express.Router();

router
    .get("/all", getAll)
    .get("/filtered", getFiltered)
    .get("/film-actors", getActorsFromFilm)

export default router;