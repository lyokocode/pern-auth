import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"
import { sequelize } from "./database/db.js"
import authRoute from "./routes/auth.js"
import userRoute from "./routes/user.js"
import categoryRoute from "./routes/product/category.js"
import productRoute from "./routes/product/product.js"
import expenseRoute from "./routes/expense/expense.js"
import expenseCategoryRoute from "./routes/expense/category.js"

const app = express()

// middlewares
dotenv.config()
app.use(cors())
app.use(express.json());
app.use(cookieParser())

// Routes
app.use("/api/auth", authRoute)
app.use("/api/user", userRoute)
app.use("/api/category", categoryRoute)
app.use("/api/product", productRoute)
app.use("/api/expense", expenseRoute)
app.use("/api/expense-category", expenseCategoryRoute)

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong!"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    })
})

async function main() {
    try {
        await sequelize.sync();
        console.log("db connection is successfull")
        app.listen(process.env.PORT, () => console.log(`api is running on port: ${process.env.PORT}`))

    } catch (error) {
        console.log(`Unable to connect to the database ${error}`)
    }
}
main()