export interface Message {
    _id?: string,
    text: string,
    timeStamp: Date,
    user: string | null
}