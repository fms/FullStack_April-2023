import express from 'express';
import * as controller from '../controllers/productsController';
const router = express.Router();

// We're going to implement the following operations:
// C - Create - app.post()
// R - Read   - app.get()
// U - Update - app.put()  /  app.patch()
// D - Delete - app.delete()
router
    .post("/add",        controller.createProduct)
    .get("/",        controller.getProducts)
    .patch("/update",       controller.updateProductPriceBody)
    .patch("/update/:name", controller.updateProductPriceQuery)
    .put("/replace",         controller.overwriteProductBody)
    .put("/replace/:name",   controller.overwriteProductQuery)
    .delete('/nuke',      controller.deleteProduct);

export default router;

