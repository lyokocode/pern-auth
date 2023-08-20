import express from "express";
import { getAllExpenses, createNewExpense } from "../../controllers/expense/Expense.js";

const router = express.Router();


// GET ALL EXPENSES
router.get("/", getAllExpenses)

// CREATE NEW EXKENSE
router.post("/", createNewExpense)

export default router
