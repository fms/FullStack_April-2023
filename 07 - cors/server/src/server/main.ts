import express from "express";
import cors from "cors";
import ViteExpress from "vite-express";

const app = express();
// app.use(cors({ origin: /localhost:517[1-4]/ }));
app.use(cors({ origin: ["http://localhost:5175", "http://localhost:5173"] }));

app.get("/hello", (req: express.Request, res) => {
  // const allowedOrigins = ["http://localhost:5173", "http://localhost:5174"];
  // if (allowedOrigins.includes(req.headers.origin ?? "forbidden")) {
  //   res.setHeader("Access-Control-Allow-Origin", req.headers.origin!);
  // }
  console.log(req.headers);
  res.send("Hello Vite + TypeScript!");
});

ViteExpress.listen(app, 3000, () => console.log("Server is listening on port 3000..."));
