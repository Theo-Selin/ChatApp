import express, { Application, json, Request, Response } from "express"
import cors from "cors"
import dotenv from "dotenv"
import messagesRouter from "./routes/messagesRoutes"
import { connect } from "mongoose"
import { loginUser } from "./services/authServices"

dotenv.config()

const app: Application = express()
app.use(cors())
app.use(json())
const port: number = parseInt(process.env.SERVER_PORT || "3001")
const mongoUrl = process.env.MONGO_URL || "mongodb://localhost:27017"

export const setupMongoDb = async (url: string) => {
    await connect(url)
}

app.post("/login", loginUser)
app.use("/messages", messagesRouter)

app.listen(port, async function () {
    await setupMongoDb(mongoUrl)
    console.log(`App is listening on port ${port} !`)
})