import express, { Request, Response, Router } from "express"
import { Message } from "@chatapp/shared"
import { MessageModel } from "../models/messageRepo"
import { loadAllMessages, saveMessage, saveMessageItem } from "../services/messagesService"
import { JwtRequest } from "../services/authServices"

const messagesRouter = express.Router()

messagesRouter.get("/", async (req: Request, res: Response<Message[]>) => {
    const messages = await loadAllMessages()
    res.send(messages)
})

messagesRouter.post("/", async (req: JwtRequest<Message>, res: Response<Message[]>) => {
    try {
        const token = req.jwt
        if (!token) throw new Error('Missing JWT!')
        res.send(await saveMessage(req.body, token?.sub));
    } catch (e) {
        res.sendStatus(400)
    }
}
);

export default messagesRouter