import express from "express";

const app = express();
const options = process.cwd();
const port = 3000;

const string = "random";

app.use(express.static("public"));

app.get("/:random", (req, res) => {
  console.log(req.params);
  res.send({ something: req.params.random });
});

app.get("/", (req, res) => {
  res.send({ something: string });
});

app.get("/now", (req, res) => {
  res.sendFile("/public/now.html", { root: options });
});

app.get("/echo/:text", (req, res) => {
  res.send({ echo: req.params.text });
});

app.listen(port, () => {
  console.log(`Live now on port: ${port}`);
});
