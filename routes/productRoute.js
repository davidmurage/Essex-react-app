import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import { createProductController, getProductController } from "../controllers/productController.js";
import formidable from "express-formidable";


const router = express.Router();


//create product
router.post('/create-product', requireSignIn, isAdmin, formidable(), createProductController);

//get all products
routet.get('/get-product', getProductController);

export default router;