import express from 'express';
import * as controller from '../controllers/taskController';
import { checkExact } from 'express-validator';
import { checkTaskName, checkDescription, checkStatus, createTaskSchema, checkID } from '../validation/taskValidation';
import {validate} from '../validation/validationSchema';

const router = express.Router();

router
  .post("/", checkExact(createTaskSchema, {message: "Extra fields"}), validate, controller.createTask)
  .get("/gettasks", controller.getAllTasks)
  .patch("/updateTN/:name", checkExact(checkTaskName), validate, controller.updateTaskName)
  .patch("/changeStatus/:name", checkExact(checkStatus), validate, controller.changeStatus)
  .delete("/delete/:name",checkExact(checkTaskName), validate, controller.deleteTask)
  .delete("/deleteid/:id", checkExact(checkID), validate,controller.deleteTaskByID)
  .put("/replace/:name", checkExact(createTaskSchema), validate, controller.replaceTask);

export default router;