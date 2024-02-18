import express from "express";
import animalRouter from "./routes/animalsRoutes";
import userRouter from "./routes/userRoutes";
import cookieParser from "cookie-parser";

export function createServer() {
  const app = express();

  app.use(express.static("public"));
  
  app.use(cookieParser());

  app.use(express.json());

  app.use("/api/animals", animalRouter);

  app.use("/api/users", userRouter);

  return app;
}
