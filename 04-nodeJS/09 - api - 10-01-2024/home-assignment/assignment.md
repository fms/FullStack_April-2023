## ``` Continue working on the previous home assignment: Add validation to you code. ```
<hr>

# Scenario: Task Manager

Build a basic task manager application.

## Model
Each task has a unique ID, a title, a description, and a status (either "To-Do,"  "Done").

# Easy
Implement the CRUD operations for managing the tasks:

### Create - create a new task
   Inputs:
   - Title
   - Description
   
   Assign a unique ID to the new task and add it to the list of tasks.

### Read - view existing tasks
   - Viewing all tasks

### Update - update the status of the task
   Inputs:
   - ID of the task to update
   - New status to set

### Delete - delete a task
Inputs:
   - ID of the task to delete

## Medium
Add support for users:

- The user can be chosen from a list of users in the main screen.
- For simplicity, the list of users is hard-coded in the frontend.
- Each user has their own list of tasks.

## Advanced
The same as Medium above with user management:

- Use register to create a new user.
- Use login to set the active user
- Don't bother with passwords