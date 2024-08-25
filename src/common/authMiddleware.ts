import { Request, Response, NextFunction } from 'express';
import { CONFIG } from '../config/vars';
import jwt from 'jsonwebtoken';

const JWT_SECRET = CONFIG['jwtSecToken'];

export const authenticate = (req: any, res: Response, next: NextFunction) => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Token is required' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { id: number; email: string };
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};
