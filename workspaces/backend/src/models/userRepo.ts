import { model, Schema } from "mongoose"

export interface UserInfo {
    username: string,
    password: string,
    name: string,
}

const UserInfoSchema = new Schema({
    username: String,
    password: String,
})

const UserModel = model<UserInfo>('UserInfo', UserInfoSchema)

export { UserModel }
