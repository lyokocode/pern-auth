import express from "express";
import { createProduct, getAllProducts } from "../controllers/Product.js";


const router = express.Router()

// GET ALL Categories
router.get("/", getAllProducts)

// Create New Category
router.post("/", createProduct)



export default router
