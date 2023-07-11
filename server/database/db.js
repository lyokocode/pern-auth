import Sequelize from "sequelize"

export const sequelize = new Sequelize('admin', 'postgres', 'aelita', {
    host: 'localhost',
    dialect: 'postgres'
})