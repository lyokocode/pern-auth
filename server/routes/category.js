import express from "express";
import { createCategory, getAllCategories } from "../controllers/Category.js";


const router = express.Router()

// GET ALL Categories
router.get("/", getAllCategories)

// Create New Category
router.post("/", createCategory)



export default router
