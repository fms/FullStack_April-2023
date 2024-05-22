import express from "express";
import ViteExpress from "vite-express";
import actorRouter from "./routes/actorRoute.js";

const app = express();

app.get("/hello", (_, res) => {
  res.send("Hello Vite + React + TypeScript!");
});

app.use("/api/actors", actorRouter);

ViteExpress.listen(app, 3000, () => console.log("Server is listening on port 3000..."));
