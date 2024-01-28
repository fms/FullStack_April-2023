import express from 'express';
import * as controller from '../controllers/taskController';
const router = express.Router();

router
    .post("/",        controller.createTask)
    .get("/gettasks",        controller.getAllTasks)
    .patch("/updateTN/:name",        controller.updateTaskName)
    .patch("/changeStatus/:name",        controller.changeStatus)
    .delete("/delete/:name",        controller.deleteTask)
    .delete("/deleteid/:id",        controller.deleteTaskByID)
    .put("/replace/:name",        controller.replaceTask)

export default router;

