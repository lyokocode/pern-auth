import { DataTypes } from "sequelize";
import { sequelize } from "../../database/db.js";

export const ExpenseCategory = sequelize.define('ExpenseCategory', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    color: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    total_amount: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
});
