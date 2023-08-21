import express from "express";
import { getAllExpenses, createNewExpense, deleteExpense, getExpense, updateExpense } from "../../controllers/expense/Expense.js";

const router = express.Router();


// GET ALL EXPENSES
router.get("/", getAllExpenses);

// GET SINGLE EXPENSE
router.get("/expense", getExpense);

// CREATE NEW EXKENSE
router.post("/", createNewExpense);

// UPDATE USER
router.put("/", updateExpense)

// DELETE EXPENSE
router.delete("/", deleteExpense);

export default router
