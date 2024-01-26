import { Request, Response, NextFunction } from "express";
import { Contact } from "../entities/contact.entity";
import { AppDataSource } from "../data-source";


export const contactValidation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const contactId: number = Number(req.params.id);

  const contact = await contactRepository.findOneBy({
    id: contactId,
  });

  if (!contact) {
    return res.status(404).json({
      message: "Contact not found",
    });
  }

  return next();
};