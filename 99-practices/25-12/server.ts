import express from "express";
import { users } from "./DB/users";

const app = express();

app.use(express.json());

app.use(express.static("public"));

const port = 3000;

app.get("/users", async (req: express.Request, res: express.Response) => {
  try {
    const usersDB = await users; // connect to DB to get inforamtion
    res.status(200).send({ ok: true, users: usersDB });
  } catch (error) {
    console.log(error);
    res.status(500).send({ ok: false, error });
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      throw new Error("no id on getUserBYID in file server.ts");
    }
    const userDB = await users.find((user) => user.id === Number(id));
    if (!userDB)
      throw new Error(
        "no user found with that id on getUserBYID in file server.ts"
      );

    res.status(200).send({ ok: true, userDB });
  } catch (error) {
    console.log(error);
    res.status(500).send({ ok: false, error });
  }
});

app.listen(port, () => {
  console.log(`Server is running in port ${port}`);
});
