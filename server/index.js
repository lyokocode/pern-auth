import express from "express"
import { sequelize } from "./database/db.js"
import cors from "cors"
import dotenv from "dotenv"


const app = express()
dotenv.config()
app.use(cors())



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