import express from "express";
import route from "./routes/taskRouter";
import { globalErrorHandler } from './handlers/errorHandler';
import { logRequest } from './handlers/Logger';

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.json());
app.use("/api", route);
app.use(globalErrorHandler);
app.use(logRequest);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

