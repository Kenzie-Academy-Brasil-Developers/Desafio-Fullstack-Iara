import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/appError";

export const verifyPermissions = (req: Request, res: Response, next: NextFunction): void => {
    const { id } = req.params; 
    const { sub } = res.locals.decoded; 


    if(id !== sub) throw new AppError('Insufficient permission', 403); 

    return next();
}