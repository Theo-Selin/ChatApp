import Message from "@chatapp/shared"
import express, { Request, Response, Router } from "express"
import { loadAllMessages, saveMessageItem } from "../models/messageRepo"

const messagesRouter = express.Router()

messagesRouter.get("/", async (req: Request, res: Response<Message[]>) => {
    const messages = await loadAllMessages()
    res.send(messages)
})

messagesRouter.post("/", async (req: Request<Message>, res: Response<Message[]>) => {
    const message = req.body
    const saved = await saveMessageItem(message)
    console.log("Saved item:", saved)
    const messages = await loadAllMessages()
    console.log("All messages", messages)
    res.send(messages)
})

export default messagesRouter