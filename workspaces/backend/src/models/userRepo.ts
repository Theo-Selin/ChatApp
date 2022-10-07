import { model, Schema } from "mongoose"

export interface User {
    username: string,
    password: string,
    name: string,
    roles: string[]
}

const UserSchema = new Schema({
    username: String,
    password: String,
    roles: Array<String>
})

const UserModel = model<User>('User', UserSchema)

export { UserModel }