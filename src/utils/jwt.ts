import jwt from "jsonwebtoken";
import type { JwtPayload, SignOptions } from "jsonwebtoken";

const createToken = (
  payload: JwtPayload,
  sceret: string,
  expiresIn: SignOptions,
) => {
  const token = jwt.sign(payload, sceret, { expiresIn } as SignOptions);

  return token;
};

export const jwtUtils = {
  createToken,
};
