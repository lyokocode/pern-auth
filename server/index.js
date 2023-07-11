import express from "express"
import { sequelize } from "./database/db.js"
import cors from "cors"
import dotenv from "dotenv"
import authRoute from "./routes/auth.js"

const app = express()
dotenv.config()
app.use(cors())

app.use("/api", authRoute)



async function main() {
    try {
        await sequelize.sync({ force: true });
        console.log("db connection is successfull")
        app.listen(process.env.PORT, () => console.log(`api is running on port: ${process.env.PORT}`))

    } catch (error) {
        console.log(`Unable to connect to the database ${error}`)
    }
}
main()