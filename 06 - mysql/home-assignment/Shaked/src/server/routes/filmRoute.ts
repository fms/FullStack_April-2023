import express from "express";
import { getActors, getAll, getById, getFilteredList } from "../controllers/filmController";

const filmRouter = express.Router();

filmRouter.get("/filtered", getFilteredList); 
filmRouter.get("/:id", getById);
filmRouter.get("/:id/actors", getActors);
filmRouter.get("/", getAll);


export default filmRouter;
