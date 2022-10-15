import express, { Request, Response, Router } from "express"
import { loginUser } from "../services/authServices"

const authRouter = express.Router()

authRouter.post("/", loginUser)

export default authRouter