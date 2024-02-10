import express, {Request, Response} from 'express';
import * as controller from '../controllers/productsController';
const router = express.Router();

// We're going to implement the following operations:
// C - Create - app.post()
// R - Read   - app.get()
// U - Update - app.put()  /  app.patch()
// D - Delete - app.delete()
router
    .post("/product",        controller.createProduct)
    .get("/products",        controller.getProducts)
    .patch("/product",       controller.updateProductPriceBody)
    .patch("/product/:name", controller.updateProductPriceQuery)
    .put("/product",         controller.overwriteProductBody)
    .put("/product/:name",   controller.overwriteProductQuery)
    .delete('/product',      controller.deleteProduct);

export default router;
