import { Request, Response } from "express";
import { createContactService, deleteContactService, readAllContactService, readContactByIdService, updateContactService } from "../services/contact.service";
import { ContactUpdate } from "../interfaces/contact.interface";


export const createContactController = async(req: Request, res: Response) => {
    const clientId: number = res.locals.clientId;
    const contact = await createContactService(req.body, clientId);

    return res.status(201).json(contact);
};

export const readAllContactController = async(req: Request, res: Response) => {
    const contacts = await readAllContactService(res.locals.clientId);
    
    return res.json(contacts);
}

export const readContactByIdController = async(req: Request, res: Response) => {
    const id: number = Number(req.params.id) 
    const contact = await readContactByIdService(id);
    
    return res.json(contact);
}

export const updateContactController = async (req: Request, res: Response) => {
    const contactId: number = Number(req.params.id);
    const clientId: number = Number(res.locals.clientId);

    const update: ContactUpdate = req.body;
    const updateContact = await updateContactService(
        update, contactId, clientId);
    return res.json(updateContact)
};

export const deleteContactController = async (req: Request, res: Response) => {
    const contactId: number = Number(req.params.id);
    const clientId: number = Number(res.locals.clientId);
    await deleteContactService(contactId, clientId);
    res.status(200).send();
};