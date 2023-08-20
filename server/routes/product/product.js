import express from "express";
import { createProduct, deleteProduct, getAllProducts, getProduct, updateProduct } from "../../controllers/product/Product.js";


const router = express.Router()

// GET ALL PRODUCT
router.get("/", getAllProducts)

// GET PRODUCT
router.get("/product", getProduct)

// CREATE NEW PRODUCT
router.post("/", createProduct)

// Update Product
router.put("/:id", updateProduct)

// Delete Product
router.delete("/product", deleteProduct)





export default router
