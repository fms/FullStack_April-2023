import express from 'express';
import * as controller from '../controllers/tasksController';

const router = express.Router();


router.post("/add",            controller.createTask, controller.getTasks)
router.get("",                 controller.getTasks)
router.patch("/status",    controller.updateStatus, controller.getTasks)
router.delete("/delete",   controller.deleteTask, controller.getTasks);

export default router;