import express, { Application, json, Request, Response } from "express"
import Message from "@chatapp/shared"
import crypto from "crypto"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()

const app: Application = express()
app.use(cors())
app.use(json())
const port: number = parseInt(process.env.SERVER_PORT || "3001")

const MESSAGES: Message[] = [{ id: crypto.randomUUID(), text: "Hej", timeStamp: new Date() }]

app.get("/messages", (req: Request, res: Response<Message[]>) => {
    res.send(MESSAGES)
})

app.post("/messages", (req: Request<Message>, res: Response<Message[]>) => {
    const message = req.body
    message.id = crypto.randomUUID()
    console.log("New message created:", message)
    MESSAGES.push(message)
    res.send(MESSAGES)
})

app.listen(port, function () {
    console.log(`App is listening on port ${port} !`)
})
