import { NextFunction, Request, Response } from "express";

import { AppError } from "../errors/appError";
import { AppDataSource } from "../data-source";
import { Client } from "../entities/client.entity";
import { repoClient } from "../repositories";

export const verifyUniqueClientEmail = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const { email } = req.body;
    const client: Client | null = await repoClient.findOneBy({ email });

    if (client) throw new AppError("Email already exists", 409);

    return next();
};

export const clientValidation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  const clientId: number = Number(req.params.id);

  const client = await repoClient.findOne({
    where: {
      id: clientId,
    },
  });

  if (!client) {
    return res.status(404).json({
      message: "Client not found!",
    });
  }

  return next();
};