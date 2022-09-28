import express, { Application, json, Request, Response } from "express"
import Message from "@chatapp/shared"
import cors from "cors"
import dotenv from "dotenv"
import { setupMongoDb, loadAllMessages, saveMessage } from "./db"

dotenv.config()

const app: Application = express()
app.use(cors())
app.use(json())
const port: number = parseInt(process.env.SERVER_PORT || "3001")
const mongoUrl = process.env.MONGO_URL || "mongodb://localhost:27017"

app.get("/messages", async (req: Request, res: Response<Message[]>) => {
    const messages = await loadAllMessages()
    res.send(messages)
})

app.post("/messages", async (req: Request<Message>, res: Response<Message[]>) => {
    const message = req.body
    const saved = await saveMessage(message)
    console.log("Saved item:", saved)
    const messages = await loadAllMessages()
    console.log("All messages", messages)
    res.send(messages)
})

app.listen(port, async function () {
    await setupMongoDb(mongoUrl)
    console.log(`App is listening on port ${port} !`)
})
