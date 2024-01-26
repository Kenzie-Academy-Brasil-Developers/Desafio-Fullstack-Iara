import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/appError";
import { verify } from "jsonwebtoken";
import { ZodTypeAny } from "zod";


export const validateBody = (schema: ZodTypeAny) => (req: Request, res:Response, next: NextFunction): void => { 
  try {
    req.body = schema.parse(req.body);
    
  } catch (error) {
    console.log(error);
  }
  return next();
}

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { authorization } = req.headers;

  if (!authorization) throw new AppError("Missing bearer token", 401);

  const token: string = authorization.split(" ")[1];
  
  verify(token, process.env.SECRET_KEY!, (error, decoded) => {
    if (error) throw new AppError(error.message, 400)
      res.locals = { ...res.locals, decoded };
    res.locals.clientId = decoded?.sub
  });

  return next();
};