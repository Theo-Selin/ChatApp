import { Message } from "@chatapp/shared";
import { MessageModel } from "../models/messageRepo";
import { loadUserByUsername } from "./authServices";

// GET messages
export const loadAllMessages = async (): Promise<Message[]> => {
    return MessageModel.find().exec()
}
export const loadMessages = async (): Promise<Message[]> => {
    return await loadAllMessages()
}
export const loadMessage = async (messageID: string): Promise<Message | null> => {
    return MessageModel.findById(messageID).exec()
}
export const loadMessageById = async (messageID: string): Promise<Message> => {
    const item = await loadMessage(messageID)

    if (!item) {
        throw new Error(`Can't find item with id ${messageID}`)
    }

    return item
}

// POST messages
export const saveMessageItem = async (message: Message): Promise<void> => {
    const textModel = new MessageModel({
        text: message.text,
        user: message.user,
        timeStamp: message.timeStamp
    })
    textModel.save()
}

export const saveMessage = async (message: Message, user: string): Promise<Message[]> => {
    if (!message.text || message.text == "") {
        throw new Error("Invalid text in the message")
    }

    await saveMessageItem(message)

    return await loadAllMessages()
}



