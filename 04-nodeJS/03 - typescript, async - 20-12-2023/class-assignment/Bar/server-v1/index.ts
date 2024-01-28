import express, { Request, Response } from "express";

const app = express();
const options = process.cwd();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req: Request, res: Response) => {
    res.sendFile("/index.html", { root: options });
});

app.get("/title", (req: Request, res: Response) => {
    res.sendFile("/public/title.html", { root: options });
});

app.listen(port, () => {
    console.log("Now live on port 3000");
})