import { DataTypes } from "sequelize";
import { sequelize } from "../../database/db.js";
import { ExpenseCategory } from "./Category.js";

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
    },
});

Expense.belongsTo(ExpenseCategory);
ExpenseCategory.hasMany(Expense);
