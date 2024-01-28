import express from "express";
import * as controller from "../controller/toysController";

const router = express.Router();

router
    .post("/toy", controller.createToy)
    .get("/toys", controller.getToy)
    .patch("/toys", controller.updateToyPriceBody)
    .put("/toy/:name", controller.overWriteToyQuery)
    .delete("/toy", controller.deleteToy)

    export default router;