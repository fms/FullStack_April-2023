import express from "express";
import * as Controller from "../controller/usersController";
import { checkExact } from "express-validator";
import * as Validation from "../validation/userValidationSchema";
import { validate } from "../validation/validationSchema";

const userRouter = express.Router();

userRouter.get("/get", Controller.getUsers);

userRouter.post(
  "/post",
  checkExact([Validation.validateUsername, Validation.validatePassword]),
  validate,
  Controller.registerUser,
  Controller.getUsers
);

userRouter.post("/register", Controller.registerUser);

userRouter.post("/login", Controller.loginUser);

userRouter.get("/logout", Controller.logoutUser);

export default userRouter;
