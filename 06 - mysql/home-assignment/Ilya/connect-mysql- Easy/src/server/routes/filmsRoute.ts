import express from "express";
import { getAll, getFiltered } from "../controllers/filmsController";

const router = express.Router();

router.get("/", getAll);
router.get("/filtered", getFiltered);

export default router;