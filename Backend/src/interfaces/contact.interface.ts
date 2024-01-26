import { z } from "zod";
import { contactCreateSchema, contactReadSchema, contactSchema } from "../schemas/contact.shema";
import { DeepPartial, Repository } from "typeorm";
import { Contact } from "../entities/contact.entity";


export type ContactCreate = z.infer<typeof contactCreateSchema>
export type ContactRead = z.infer<typeof contactReadSchema>
export type ContactResponse = z.infer<typeof contactSchema>;
export type ContactUpdate = DeepPartial<ContactCreate>;
export type RepoContact = Repository<Contact>;