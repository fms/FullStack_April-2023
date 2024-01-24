import express from 'express';
import * as userController from '../contoller/userController';
const router = express.Router();

router.post("/addUser",userController.addNewUser,userController.getUsers);
router.get("/getUsers",userController.getUsers);
router.patch("/updateStatus",userController.updateUserStatus,userController.getUsers);

export default router;

