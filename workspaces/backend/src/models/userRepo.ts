import { model, Schema } from "mongoose"

export interface User {
    username: string,
}

const UserSchema = new Schema({
    username: String,
})

const UserModel = model<User>('User', UserSchema)

export { UserModel }