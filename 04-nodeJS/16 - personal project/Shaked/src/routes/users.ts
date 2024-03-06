import express from 'express';
import * as userController from '../controllers/userController';
import { checkExact } from 'express-validator';
import { createUserSchema } from '../validation/userValidation';
import {validate} from '../validation/validationSchema';

const userRouter = express.Router();

userRouter
  .post("/login", checkExact(createUserSchema), validate, userController.login)
  .post("/register", checkExact(createUserSchema), validate, userController.register)
  .post("/logout", userController.logout)
  
export default userRouter;