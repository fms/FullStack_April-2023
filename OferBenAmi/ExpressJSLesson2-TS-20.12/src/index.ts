import express, { Express, Request, Response } from "express";
const app: Express = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

app.get("/", (req: Request, res: Response) => {

});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
