import express from "express";
import route from "./routes/taskRouter";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.json());
app.use("/api", route);
app.use(globalErrorHandler);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

function globalErrorHandler(error: any, req: express.Request, res: express.Response, next: express.NextFunction) {
  if (error instanceof Error){
      res.statusMessage = error.message;
      res.status(500).send({ error: error.message });
  }
  else {
      res.status(500).send({ error });
  }
}