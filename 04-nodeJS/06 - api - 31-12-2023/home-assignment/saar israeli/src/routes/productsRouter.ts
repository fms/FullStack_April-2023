import express from 'express';
import * as controller from '../controller/productsController';
const router = express.Router();

router
    .post("/product", controller.createProduct)
    .get("/products", controller.getProducts)
    .patch("/product", controller.updateProductPriceBody)
    .put("/product/:name", controller.overwriteProductQuery)
    .delete("/product", controller.deleteProduct);

    export default router;