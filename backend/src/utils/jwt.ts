import jwt from 'jsonwebtoken';
import { v4 as uuid } from 'uuid';

const ACCESS_SECRET = process.env.JWT_ACCESS_SECRET as string;
const REFRESH_SECRET = process.env.JWT_REFRESH_SECRET as string;

export const signAccessToken = (payload: object) =>
  jwt.sign(payload, ACCESS_SECRET, { expiresIn: '15m' });

export const signRefreshToken = (payload: object) =>
  jwt.sign({ ...payload, jti: uuid() }, REFRESH_SECRET, {
    expiresIn: '7d',
  });

export const verifyRefreshToken = (token: string) =>
  jwt.verify(token, REFRESH_SECRET);