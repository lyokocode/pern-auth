import { ExpenseCategory } from "../../models/expense/Category.js";
import { Expense } from "../../models/expense/Expense.js";
import { Op } from 'sequelize';
import moment from "moment/moment.js";
import randomColor from "randomcolor";

export const getAllCategories = async (req, res, next) => {
    try {
        const { startDate, endDate } = req.query;
        const filters = {};

        if (startDate && endDate) {
            filters.date = {
                [Op.between]: [new Date(startDate), new Date(endDate)],
            };
        }

        // Fetch categories based on applied filters
        const categories = await ExpenseCategory.findAll({
            where: filters,
            include: [
                {
                    model: Expense,
                    where: filters, // Apply filters to included expenses
                },
            ],
        });

        // Calculate and update total_amount for each category
        categories.forEach(async (category) => {
            const expenses = category.Expenses;
            const totalAmount = expenses.reduce((total, expense) => total + expense.amount, 0);
            await category.update({ total_amount: totalAmount });
        });

        res.status(200).json(categories);

    } catch (err) {
        next(err)
    }
}


export const createCategory = async (req, res, next) => {
    try {
        const { name, color } = req.body;

        // Create a new category
        const newCategory = await ExpenseCategory.create({
            name,
            color: randomColor(),
            date: moment().format("L")
        });

        res.status(201).json(newCategory);

    } catch (err) {
        next(err);
    }
}