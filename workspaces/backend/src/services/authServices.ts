import { Credentials } from "@chatapp/shared";
import { NextFunction, Request, Response } from "express";
import jsonwebtoken from "jsonwebtoken";
import { User, UserModel } from "../models/userRepo";

const secret: string = process.env.TOKEN_SECRET || "f9daa8f6d2907e86f8dc8b741";

export type TokenPayload = {
    sub: string;
    name: string;
    roles: string[];
};

export interface JwtRequest<T> extends Request<T> {
    jwt?: TokenPayload;
}

export const authenticateToken = (
    req: JwtRequest<any>,
    res: Response,
    next: NextFunction
) => {
    const token: string | undefined = req.header("authorization")?.split(" ")[1];

    if (token) {
        try {
            const decoded = jsonwebtoken.verify(token, secret) as TokenPayload;
            req.jwt = decoded;
        } catch (err) {
            return res.sendStatus(403);
        }
    } else {
        return res.sendStatus(401);
    }

    next();
};

export const loginUser = async (
    req: JwtRequest<Credentials>,
    res: Response<string>
) => {
    const credentials = req.body;

    const userInfo = await performUserAuthentication(credentials);
    if (!userInfo) {
        // Create a new user if it doesn't exist
        const userInfo = new UserModel(credentials)
        await userInfo.save()
        const token = jsonwebtoken.sign(
            { sub: userInfo.username },
            secret
        );
        return res.send(token);
    }

    const token = jsonwebtoken.sign(
        { sub: userInfo.username },
        secret
    );
    return res.send(token);
};

const performUserAuthentication = async (
    credentials: Credentials
): Promise<User | null> => {
    const userInfo = await loadUserByUsername(credentials.username);
    return userInfo;
};

export const loadUserByUsername = async (username: string): Promise<User | null> => {
    return await UserModel.findOne({ username: username }).exec()
}