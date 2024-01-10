import express from 'express';
import * as controller from '../controllers/tasksController';

const router = express.Router();

router
    .post("/add",            controller.createTask)
    .get("",                 controller.getTasks)
    .patch("/status/:id",    controller.updateStatus)
    .delete("/delete/:id",   controller.deleteTask);

export default router;