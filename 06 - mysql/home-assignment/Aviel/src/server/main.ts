import express from "express";
import ViteExpress from "vite-express";
import actorRouter from "./routes/actorRoute";
import filmRouter from "./routes/filmRoute";

const app = express();
app.use(express.json());

// app.get("/hello", (_, res) => {
//   res.send("Hello Vite + React + TypeScript!");
// });

app.use("/api/actors", actorRouter);
app.use("/api/films", filmRouter);

ViteExpress.listen(app, 3000, () => console.log("Server is listening on port 3000..."));
