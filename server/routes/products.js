import express from 'express';
import { addProducts, getAllProducts } from '../controllers/products.js';

const router = express.Router();

router.route("/add-products").post(addProducts)
router.route("/get-products").post(getAllProducts)

export const ProductsRouter = router
