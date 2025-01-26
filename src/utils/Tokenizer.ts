import jwt from "jsonwebtoken";

import { Payload } from "../types/utils.types";

export class Tokenizer {

    generateTokens<T extends Payload>(data: T) {
        const accessToken = jwt.sign(data, process.env.JWT_SECRET || "", {
            expiresIn: '10m',
            issuer: "sinque-backend"
        });

        const refreshToken = jwt.sign(data, process.env.JWT_REFRESH_SECRET || "", {
            expiresIn: "30d",
            issuer: "sinque-backend"
        });
        return { accessToken, refreshToken };
    }
}
