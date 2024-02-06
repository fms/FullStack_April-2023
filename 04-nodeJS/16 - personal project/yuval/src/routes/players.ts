import express from 'express';
import * as Controller from '../controllers/playerController';
import { addPlayerSchema, updatePlayerSchema, personValidation, jerseyNumberValidation, heightValidation, positionValidation} from '../validation/playersValidationSchema';
import { ValidationChain, checkExact, oneOf } from 'express-validator';
import { validate, validateSchema } from '../validation/validateSchema';

const router = express.Router();
const flattenedValidationChains: ValidationChain[] = updatePlayerSchema.flat();

router.post("/add", checkExact(addPlayerSchema, { message: "Extra fields found" }),
                    validate,
                    Controller.addPlayer,
                    Controller.getPlayers);

router.get("/get", Controller.getPlayers);

router.patch("/update", oneOf([jerseyNumberValidation, heightValidation, positionValidation],
                            {message: "Must include at least one of jersey number, height or position" }),
                        validateSchema(flattenedValidationChains),
                        Controller.updatePlayer,
                        Controller.getPlayers);

router.delete("/delete", personValidation,
                        validate,
                        Controller.deletePlayer,
                        Controller.getPlayers);

export default router;

