import User from "@chatapp/shared/src/user";
import express, { Request, Response } from "express";
import { loadAllUsers, saveUserModel } from "../services/usersService";

const authRouter = express.Router()

authRouter.post("/signup", async (req: Request<User>, res: Response<User[]>) => {
    const user = req.body
    const saved = await saveUserModel(user)
    console.log("Saved item:", saved)
    const users = await loadAllUsers()
    console.log("All users", users)
    res.send(users)
})

export default authRouter