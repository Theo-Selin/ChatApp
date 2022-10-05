import User from "@chatapp/shared/src/user"
import { UserModel } from "../models/userRepo"

export const loadAllUsers = async (): Promise<User[]> => {
    return UserModel.find().exec()
}

export const saveUserModel = async (message: User): Promise<void> => {
    const textModel = new UserModel(message)
    textModel.save()
}
export const saveUser = async (user: User): Promise<User[]> => {
    if (!user.username || user.username == "") {
        throw new Error("Invalid text in the message")
    }

    await saveUserModel(user)

    return await loadAllUsers()
}
