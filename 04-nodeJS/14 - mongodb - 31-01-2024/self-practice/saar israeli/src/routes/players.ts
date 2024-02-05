import express from 'express';
import * as Controller from '../controllers/playersController';
import { checkExact, oneOf } from 'express-validator';
import { validate, validateSchema } from '../validation/validateSchema';

const router = express.Router();

router.post("/add",Controller.addPlayer,Controller.getPlayers);
router.get("/get",Controller.getPlayers);
router.delete("/delete",Controller.deletePlayer,Controller.getPlayers);
router.patch("/update",Controller.updatePlayer,Controller.getPlayers);


export default router;