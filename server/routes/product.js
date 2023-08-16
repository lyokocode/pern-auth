import express from "express";
import { createProduct, getAllProducts, updateProduct } from "../controllers/Product.js";


const router = express.Router()

// GET ALL Categories
router.get("/", getAllProducts)

// Create New Category
router.post("/", createProduct)

// Update Product
router.put("/:id", updateProduct)




export default router
