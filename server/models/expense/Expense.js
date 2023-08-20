import { DataTypes } from "sequelize";
import { sequelize } from "../../database/db.js";
import { ExpenseCategory } from "./Category.js";
import moment from "moment";


export const Expense = sequelize.define('Expense', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
            async isDateAfterCategoryDate() {
                const category = await this.getExpenseCategory();
                if (category && moment(this.date).isBefore(category.date, 'day')) {
                    throw new Error("Expense date cannot be earlier than category date");
                }
            },
        },
    },
});

Expense.belongsTo(ExpenseCategory);
ExpenseCategory.hasMany(Expense);
