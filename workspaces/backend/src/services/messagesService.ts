import Message from "@chatapp/shared";
import { loadAllMessages, loadMessage, saveMessageItem } from "../models/messageRepo";

export const saveMessage = async (message: Message): Promise<Message[]> => {
    if (!message.text || message.text == "") {
        throw new Error("Invalid text in the message")
    }
    message.timeStamp = new Date()

    await saveMessageItem(message)

    return await loadAllMessages()
}

export const loadMessages = async (): Promise<Message[]> => {
    return await loadAllMessages()
}

export const loadMessageById = async (messageID: string): Promise<Message> => {
    const item = await loadMessage(messageID)

    if(!item) {
        throw new Error(`Can't find item with id ${messageID}`)
    }

    return item
}