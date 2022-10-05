import { Request } from "express"

export type TokenPayload = {
    sub: string;
    name: string;
};

export interface JwtRequest<T> extends Request<T> {
    jwt?: TokenPayload;
}