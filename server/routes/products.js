import express from 'express';
import { addProducts, allCategories, getAllProducts } from '../controllers/products.js';

const router = express.Router();

router.route("/add-products").post(addProducts)
router.route("/get-products").post(getAllProducts)
router.route("/all-categories").get(allCategories)

export const ProductsRouter = router
