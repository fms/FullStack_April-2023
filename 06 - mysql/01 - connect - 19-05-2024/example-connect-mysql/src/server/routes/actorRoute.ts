import express from "express";
import { getActor, getAllActors } from "../database/actorsQueries.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const actors = await getAllActors();
  res.send({ actors });
});

router.get("/:id", async (req, res) => {
  try {
    // Of course, we absolutely need to add validation on the parameter
    const id = req.params.id;
    const num = Number.parseInt(id, 10);

    const actor = await getActor(num);
    if (!actor) {
      throw new Error("No actor for this ID");
    }
    res.send({ actor });
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).send({ error: error.message });
    }
  }
});

export default router;
