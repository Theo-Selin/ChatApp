import { connect, model, Schema } from "mongoose"
import Message from "@chatapp/shared"

const MessageSchema = new Schema({
    text: String,
    timeStamp: Date
})

const MessageModel = model<Message>("Message", MessageSchema)

export const setupMongoDb = async (url: string) => {
    await connect(url)
}

export const loadAllMessages = async (): Promise<Message[]> => {
    return MessageModel.find().exec()
}

export const loadMessage = async (messageID: string): Promise<Message | null> => {
    return MessageModel.findById(messageID).exec()
}

export const saveMessageItem = async (message: Message): Promise<void> => {
    const textModel = new MessageModel(message)
    textModel.save()
}