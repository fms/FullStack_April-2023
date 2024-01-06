import express, { Express, Request, Response } from "express";
import process from "process";

const app: Express = express();
const port = 3000;
const options = process.cwd();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get("/now", async (req: Request, res: Response) => {
    try {
        const dateFromFunction = await dateNow();
        res.status(200).send({ date: dateFromFunction });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error });
    }
});

app.get("/echo/:text", async (req: Request, res: Response) => {
    try {
        const { text } = await req.params;
        res.status(200).send({ message: text });
    } catch (error) {
        console.error(error);
        res.status(500);
    }
});

app.post("/submit", (req: Request, res: Response) => {
    console.log(req.body);
});

function dateNow(){
    return new Date()
}

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
