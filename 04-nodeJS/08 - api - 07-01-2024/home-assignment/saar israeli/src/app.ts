import express from 'express';
import tasksRouter from './router/taskRouter';
import userRouter from './router/userRouter';


const app = express();
const options = process.cwd();
const port = 3000;

app.use(express.static("public"));

app.use(express.json());

app.use('/api/users',userRouter);

app.use('/api/tasks', tasksRouter);

app.listen(port,() => {
    console.log(`Server started on http://localhost:${port}`)
})