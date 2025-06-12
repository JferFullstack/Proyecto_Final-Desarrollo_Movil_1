// backend/src/middleware/errorHandler.ts
import { Request, Response, NextFunction } from 'express';

interface CustomError extends Error {
  statusCode?: number;
  data?: any;
}

export const errorHandler = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error('Error capturado por el middleware centralizado:', err);

  const statusCode = err.statusCode || 500;
  const message = err.message || 'Error interno del servidor.';
  const data = err.data;

  res.status(statusCode).json({
    success: false,
    message: message,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
    data: data,
  });
};