import { Credentials } from "@chatapp/shared"
import express, { Request, Response, Router } from "express"
import { getAllUsers, loginUser } from "../services/authServices"

const authRouter = express.Router()

authRouter.post("/", loginUser)

authRouter.get("/", async (req: Request, res: Response<Credentials[]>) => {
    const users = await getAllUsers()
    res.send(users)
})

export default authRouter