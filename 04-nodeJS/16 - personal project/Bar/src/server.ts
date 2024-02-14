import express from "express";
import router from "./routes/animalsRoutes";

export function createServer() {
  const app = express();

  app.use(express.static("public"));

  app.use(express.json());

  app.use("/api/animals", router);

  return app;
}
