import { Request, Response, NextFunction } from "express";
import { ZodTypeAny, z } from "zod";


export const dateValidation = ( schema: ZodTypeAny) => ( 
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const validatedDate = schema.parse(req.body);
  req.body = validatedDate;
  return next();
};