import express from 'express';
import { TaskModel } from '../model/Task'; 

const router = express.Router();

// Route handler for creating a new task
router.post('/addTask', async (req, res) => {
    try {
        console.log("add task was called")
        // Extract task data from the request body
        const { task } = req.body;

        // Create a new task instance using the TaskModel
        const newTask = new TaskModel({
            task,
            status: 0 // Assuming default status is 'todo'
        });

        // Save the new task to the database
        await newTask.save();

        // Send a success response
        res.status(201).json({ message: 'Task created successfully', task: newTask });
    } catch (error) {
        // If an error occurs, send an error response
        console.error('Error creating task:', error);
        res.status(500).json({ message: 'Failed to create task' });
    }
});
router.get('/getAllTasks', async (req, res) => {
    try {
        console.log("get all the tasks..")
        // Extract task data from the request body
    

        // Create a new task instance using the TaskModel
        const allTasks = await TaskModel.find();


        // Send a success response
        res.status(201).json({  allTasks });
    } catch (error) {
        // If an error occurs, send an error response
        console.error('Error creating task:', error);
        res.status(500).json({ message: 'Failed to create task' });
    }
});

router.post('/deleteTask', async (req, res) => {
    try {
        console.log("get all the tasks..")
        // Extract task data from the request body
    

        // Create a new task instance using the TaskModel
        const allTasks = await TaskModel.find();


        // Send a success response
        res.status(201).json({  allTasks });
    } catch (error) {
        // If an error occurs, send an error response
        console.error('Error creating task:', error);
        res.status(500).json({ message: 'Failed to create task' });
    }
});

export default router;

