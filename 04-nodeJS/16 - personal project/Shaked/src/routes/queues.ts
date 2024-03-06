import express from 'express';
import * as controller from '../controllers/controller';
import { checkExact } from 'express-validator';
import { checkName, createQueueSchema } from '../validation/queueValidation';
import {validate} from '../validation/validationSchema';

const router = express.Router();

router
  .post("/add", checkExact(createQueueSchema, {message: "Extra fields"}), validate, controller.createQueue)
  .get("/get", controller.getAllQueues)
  .patch("/update/:name", checkExact(checkName), validate, controller.updateQueueName)
  .delete("/delete/:name", checkExact(checkName), validate, controller.deleteByName)
  .delete("/deleteall", controller.deleteAll)
  .put("/replace/:name", checkExact(createQueueSchema), validate, controller.replaceQueueByName);
export default router;