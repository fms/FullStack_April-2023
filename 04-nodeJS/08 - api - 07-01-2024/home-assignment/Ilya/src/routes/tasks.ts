import express from 'express';
import * as Controller from '../controllers/TaskController';

const router = express.Router();

router.post("/add", Controller.addTask, Controller.getTasks);               // Create
router.get("/get", Controller.getTasks);                                    // Read
router.patch("/update", Controller.updateTask, Controller.getTasks);        // Update
router.delete("/delete", Controller.deleteTask, Controller.getTasks);       // Delete

export default router;
