import express from 'express';
import * as Controller from '../controllers/TaskController';
import { addTaskSchema, descriptionValidation, idValidation, statusValidation, titleValidation, updateTaskSchema } from '../validation/tasksValidationSchema';
import { checkExact, oneOf } from 'express-validator';
import { validate, validateSchema } from '../validation/validateSchema';

const router = express.Router();

          // Create
router.post("/add", checkExact(addTaskSchema, { message: "Extra fields found" }),                                       // Create
                    validate,
                    Controller.addTask,
                    Controller.getTasks),
router.get("/get", Controller.getTasks);    





// Read


router.patch("/update", oneOf([titleValidation, descriptionValidation, statusValidation],                               // Update
                              {message: "Must include at least one of title, description or status" }),
                        validateSchema(updateTaskSchema),
                        Controller.updateTask,
                        Controller.getTasks);


router.delete("/delete", idValidation,                                                                                  // Delete
                         validate,
                         Controller.deleteTask,
                         Controller.getTasks);

export default router;

