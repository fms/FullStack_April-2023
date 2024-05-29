import express from 'express';
import { getFilms, getFilterdFilms } from '../controllers/filmController';

const router = express.Router();

router.get("/", getFilms);
router.get("/filter",getFilterdFilms)

export default router;