import express from 'express';
import * as controller from '../contoller/taskController';

const router = express.Router();

router.post("/add",controller.addNewTask, controller.getTask);
router.get("/get", controller.getTask);
router.patch("/update", controller.updateTask, controller.getTask);
router.delete("/delete", controller.deleteTask, controller.getTask);
router.patch("/updateStatus", controller.updateStatus,controller.getTask);

export default router;