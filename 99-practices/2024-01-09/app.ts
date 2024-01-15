import express from "express"

const app = express();

const port = 3000

app.use(express.json())

// const log = (req, res, next) => {
//     console.log(req.body)
//     next()
// }

import taskRoutes from "./routes/tasksRoutes";
app.use("/api/tasks",  taskRoutes)

app.listen(port, () => {
    console.log(`listens on port ${port}`)
})

