import express from "express"
import { getAllTasks, getTaskByID } from "../controller/tasksCtrl"

const router = express.Router()

// /api/tasks/1
router 
.get("", getAllTasks)
.get("/:id", getTaskByID)

export default router