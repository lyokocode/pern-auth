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
            include: [
                {
                    model: ExpenseCategory,
                    attributes: ['name'],
                },
            ],
        });
        res.status(200).json(expenses);


    } catch (err) {
        next(err)
    }
}

export const getExpense = async (req, res, next) => {
    try {
        const { expenseId } = req.query;

        // Find the expense with the provided expenseId
        const expense = await Expense.findByPk(expenseId, {
            include: [
                {
                    model: ExpenseCategory,
                    attributes: ['name'],
                },
            ],
        });

        if (!expense) {
            return res.status(404).json({ message: "Expense not found" });
        }

        res.status(200).json(expense);
    } catch (err) {
        next(err);
    }
};

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

export const deleteExpense = async (req, res, next) => {
    try {
        const { expenseId } = req.query;

        // Check if the provided expenseId is valid
        if (!expenseId) {
            return res.status(400).json({ message: "Expense ID is required" });
        }

        // Delete the expense with the provided ID
        const deletedExpense = await Expense.destroy({
            where: {
                id: expenseId
            }
        });

        if (!deletedExpense) {
            return res.status(404).json({ message: "Expense not found" });
        }

        res.status(200).json({ success: true, message: "Expense deleted successfully" });
    } catch (err) {
        next(err);
    }
};


export const updateExpense = async (req, res, next) => {
    const { expenseId } = req.query;
    const updatedFields = req.body;

    try {
        const expense = await Expense.findByPk(expenseId);

        if (!expense) {
            return res.status(404).json({ error: "Expense not found" });
        }

        Object.keys(updatedFields).forEach((field) => {
            if (field !== 'id') {
                expense[field] = updatedFields[field];
            }
        });

        await expense.save();

        return res.json({ success: true, data: expense });

    } catch (error) {
        next(error);
    }
}
