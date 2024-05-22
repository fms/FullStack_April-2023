import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.json());

interface Human {
  name: string;
  age: number;
}

const humans: Human[] = [];

app.get("/humans", (req: express.Request, res: express.Response) => {
  res.send({ humans });
});

app.post("/human", (req: express.Request, res: express.Response) => {
  try {
    const newHuman = req.body;

    if (!newHuman.name || !newHuman.age) {
      throw new Error("Wrong Parameters");
    }

    const index = humans.findIndex((human) => human.name === newHuman.name);
    if (index !== -1) {
      throw new Error(`Human already in the list`);
    }

    humans.push(newHuman);
    console.log(`New human named "${newHuman.name}" has been added`);

    res.send({ humans });
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
