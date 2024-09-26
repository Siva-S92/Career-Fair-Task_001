import express from 'express';
import { addProducts, allCategories, fetchSingleProduct, getAllProducts } from '../controllers/products.js';

const router = express.Router();

router.route("/add-products").post(addProducts)
router.route("/get-products").post(getAllProducts)
router.route("/all-categories").get(allCategories)
router.route("/product").get(fetchSingleProduct)

export const ProductsRouter = router
