import { NextFunction, Request, Response } from "express";
import jsonwebtoken from "jsonwebtoken"

const secret: string = process.env.TOKEN_SECRET || "f9daa8f6d9ec89bd339e1fbf2907e86f8dc8b741";

export type TokenPayload = {
    sub: string;
    name: string;
    roles: string[];
};

export interface JwtRequest<T> extends Request<T> {
    jwt?: TokenPayload;
}

export const verifyToken = (
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
            return res.sendStatus(403); // Bad token!
        }
    } else {
        return res.sendStatus(401); // No token! Unauthorized!
    }

    next();
};