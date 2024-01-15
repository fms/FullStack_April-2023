import * as controller from "../controller/taskController";
import express from "express";

const route = express.Router();

route
  .get("/tasks", controller.getTasks)
  .post("/task", controller.createTask, controller.getTasks)
  .patch("/task", controller.updateTaskBody, controller.getTasks)
  .patch("/task/:id", controller.updateTaskStatus, controller.getTasks)
  .put("/task/:id", controller.overwriteTaskQuery, controller.getTasks)
  .delete("/task", controller.deleteTask, controller.getTasks);

export default route;
