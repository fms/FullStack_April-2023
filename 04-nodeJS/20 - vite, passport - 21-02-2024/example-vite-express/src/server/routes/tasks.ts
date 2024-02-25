import express from 'express';
import * as Controller from '../controllers/TaskController';
import { addTaskSchema, descriptionValidation, idValidation, statusValidation, titleValidation, updateTaskSchema } from '../validation/tasksValidationSchema';
import { checkExact, oneOf } from 'express-validator';
import { validate, validateSchema } from '../validation/validateSchema';

const router = express.Router();

// The following two alternative perform the same validation: Make sure the title and description are valid
// and are the only values specified in the request.
// The validate() middleware is used just for acting all the validations at once.
// router.post("/add", checkExact([titleValidation, descriptionValidation], { message: "Extra fields found" }),            // Create
router.post("/add", checkExact(addTaskSchema, { message: "Extra fields found" }),                                       // Create
                    validate,
                    Controller.addTask,
                    Controller.getTasks);
router.get("/get", Controller.getTasks);                                                                                // Read
router.get("/find/:word", Controller.searchTasks);                                                                                // Read

// Use oneOf() middleware to check for at least one valid field.
// Note the use validateSchema to also make sure the ID is provided.
router.patch("/update", oneOf([titleValidation, descriptionValidation, statusValidation],                               // Update
                              {message: "Must include at least one of title, description or status" }),
                        validateSchema(updateTaskSchema),
                        Controller.updateTask,
                        Controller.getTasks);

// A ValidationChain is a valid middleware, which we use here directly. 
// We call the validate() middleware to actually check for any failed validations
router.delete("/delete", idValidation,                                                                                  // Delete
                         validate,
                         Controller.deleteTask,
                         Controller.getTasks);

export default router;

