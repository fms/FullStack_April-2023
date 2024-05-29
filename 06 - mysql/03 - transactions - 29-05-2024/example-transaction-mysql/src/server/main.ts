import express from "express";
import ViteExpress from "vite-express";
import actorRouter from "./routes/actorRoute";

const app = express();
app.use(express.json());

// app.get("/hello", (_, res) => {
//   res.send("Hello Vite + React + TypeScript!");
// });

app.use("/api/actors", actorRouter);

ViteExpress.listen(app, 3000, () => console.log("Server is listening on port 3000..."));
