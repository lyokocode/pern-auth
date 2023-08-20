import { ExpenseCategory } from "../../models/expense/Category.js";
import { Expense } from "../../models/expense/Expense.js";
import { Op } from 'sequelize';

export const getAllExpenses = async (req, res, next) => {
    try {
        const { startDate, endDate, minPrice, maxPrice } = req.query;
        const filters = {};

        // Apply date range filter if both startDate and endDate are provided
        if (startDate && endDate) {
            filters.date = {
                [Op.between]: [new Date(startDate), new Date(endDate)],
            };
        }
        // Apply price range filter if both minPrice and maxPrice are provided

        if (minPrice && maxPrice) {
            filters.amount = {
                [Op.between]: [minPrice, maxPrice],
            };
        }

        // Fetch expenses based on applied filters
        const expenses = await Expense.findAll({
            where: filters,
        });
        res.status(200).json(expenses);


    } catch (err) {
        next(err)
    }
}

export const createNewExpense = async (req, res, next) => {
    try {
        const { name, amount, image, date, categoryId } = req.body;

        // Check if the provided categoryId corresponds to an existing ExpenseCategory
        const category = await ExpenseCategory.findByPk(categoryId);
        if (!category) {
            return res.status(400).json({ message: "Invalid categoryId" });
        }

        // Create a new expense with the provided data
        const newExpense = await Expense.create({
            name,
            amount,
            image,
            date,
            ExpenseCategoryId: categoryId, // Associate with the category
        });

        res.status(201).json({ success: true, data: newExpense });
    } catch (err) {
        next(err);
    }
};