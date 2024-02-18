import express from 'express';
import * as Controller from '../controllers/usersController';
import { registerUserSchema as registerUserSchema, emailUpdateValidation, passwordValidation,fullNameValidation, updateUserSchema , idValidation } from '../validation/userValidationSchema';
import { checkExact } from 'express-validator';
import { validate } from '../validation/validateSchema';

const router = express.Router();

router.post("/register", checkExact(registerUserSchema, {message:"Too much fields"}),
                    validate,
                    Controller.registerUser,
                    Controller.getUsers);

router.get("/get", Controller.getUsers);


router.patch("/update", checkExact(updateUserSchema),
                        validate,
                        Controller.updateUser,
                        Controller.getUsers);

router.delete("/delete",idValidation,
                        validate,
                        Controller.deleteUser,
                        Controller.getUsers);

router.post("/login", Controller.loginUser);


router.get("/notes", Controller.getNotes);

export default router;
