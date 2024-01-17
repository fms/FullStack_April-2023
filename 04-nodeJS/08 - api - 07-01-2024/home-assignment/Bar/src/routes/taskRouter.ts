// import * as controller from "../controller/taskController";
// import express from "express";
// import { addTaskSchema, descriptionValidation, idValidation, statusValidation, titleValidation, updateTaskSchema } from '../validation/tasksValidation';
// import { checkExact, oneOf } from 'express-validator';
// import { validate, validateSchema } from '../validation/validateSchema';

// const route = express.Router();

// route
//   .get("/tasks", controller.getTasks)
//   .post("/task",checkExact(addTaskSchema, { message: "Extra fields found" }),                                       // Create
//   validate, controller.createTask, controller.getTasks)
//   .patch("/task",oneOf([titleValidation, descriptionValidation, statusValidation],{message: "Must include at least one of title, description or status" }),validateSchema(updateTaskSchema), controller.updateTaskBody, controller.getTasks)
//   .patch("/task/:id",oneOf([titleValidation, descriptionValidation, statusValidation],                              
//   {message: "Must include at least one of title, description or status" }),
// validateSchema(updateTaskSchema), controller.updateTaskStatus, controller.getTasks)
//   .put("/task/:id", controller.overwriteTaskQuery, controller.getTasks)
//   .delete("/task", idValidation, validate,controller.deleteTask, controller.getTasks);

// export default route;



import * as controller from "../controller/taskController";
import express from "express";
import { descriptionValidation, idValidation, statusValidation, titleValidation } from '../validation/tasksValidation';
import { oneOf } from 'express-validator';
import { validate} from '../validation/validateSchema';

const route = express.Router();

route
  .get("/tasks", controller.getTasks)
  .post("/task",validate, controller.createTask, controller.getTasks)
  .patch("/task",oneOf([titleValidation, descriptionValidation, statusValidation],{message: "Must include at least one of title, description or status" }), controller.updateTaskBody, controller.getTasks)
  .patch("/task/:id",oneOf([titleValidation, descriptionValidation, statusValidation],{message: "Must include at least one of title, description or status" }), controller.updateTaskStatus, controller.getTasks)
  .put("/task/:id", controller.overwriteTaskQuery, controller.getTasks)
  .delete("/task", idValidation, validate,controller.deleteTask, controller.getTasks);

export default route;
