import express from 'express';
import * as Controller from '../controllers/playerController';
import { addPlayerSchema, addPersonSchema, updatePlayerSchema, personIdValidation, personValidation, jerseyNumberValidation, heightValidation, positionValidation} from '../validation/playersValidationSchema';
import { ValidationChain, checkExact, oneOf } from 'express-validator';
import { validate, validateSchema } from '../validation/validateSchema';

const router = express.Router();

router.post("/add/player", checkExact(addPlayerSchema, { message: "Extra fields found" }),
                    validate,
                    Controller.addPlayer,
                    Controller.getPlayers);

router.post("/add/person", checkExact(addPersonSchema, { message: "Extra fields found" }),
                    validate,
                    Controller.addPerson,
                    Controller.getPerson);

router.get("/get/players", Controller.getPlayers);

router.get("/get/person", Controller.getPerson);

router.patch("/update", oneOf([jerseyNumberValidation, heightValidation, positionValidation],
                            {message: "Must include at least one of jersey number, height or position" }),
                        validateSchema(updatePlayerSchema),
                        Controller.updatePlayer,
                        Controller.getPlayers);

router.delete("/delete", personValidation,
                        validate,
                        Controller.deletePlayer,
                        Controller.getPlayers);

export default router;

