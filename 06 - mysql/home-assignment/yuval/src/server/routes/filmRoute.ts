import express from "express";
import { getActorsFromFilm, getAll, getFiltered, getFilteredWithCategory, getFilteredWithLanguage } from "../controllers/filmsController";

const router = express.Router();

router
    .get("/all", getAll)
    .get("/filtered", getFiltered)
    .get("/filteredLang", getFilteredWithLanguage)
    .get("/filteredCat", getFilteredWithCategory)
    .get("/film-actors", getActorsFromFilm)

export default router;