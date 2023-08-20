import express from "express";
import { createCategory, getAllCategories } from "../../controllers/expense/Category.js";

const router = express.Router();

// GET ALL CATEGORİES
router.get("/", getAllCategories)

router.post("/", createCategory)

export default router
