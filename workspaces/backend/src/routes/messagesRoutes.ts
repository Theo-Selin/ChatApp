import express, { Request, Response, Router } from "express"
import { Message } from "@chatapp/shared"
import { MessageModel } from "../models/messageRepo"
import { loadAllMessages, saveMessageItem } from "../services/messagesService"

const messagesRouter = express.Router()

messagesRouter.get("/", async (req: Request, res: Response<Message[]>) => {
    const messages = await loadAllMessages()
    res.send(messages)
})

messagesRouter.post("/", async (req: Request<Message>, res: Response<Message[]>) => {
    const message = new MessageModel();
    message.text = req.body
    const saved = await saveMessageItem(message)
    console.log("Saved item:", saved)
    const messages = await loadAllMessages()
    console.log("All messages", messages)
    res.send(messages)
})

export default messagesRouter