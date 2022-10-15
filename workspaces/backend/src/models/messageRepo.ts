import { model, Schema } from "mongoose"
import { Message } from "@chatapp/shared"

const MessageSchema = new Schema({
    text: String,
    timeStamp: Date,
    user: String
})

const MessageModel = model<Message>("Message", MessageSchema)

export { MessageModel }