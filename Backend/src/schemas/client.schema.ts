import { z } from "zod";
import { contactSchemaResponse } from "./contact.shema";

export const clientSchema = z.object({
    id: z.number().int().positive(),
    full_name: z.string().max(200).min(7),
    email: z.string().email().max(45).min(4),
    tel: z.string(),
    password: z.string().max(120).min(4),
    createdAt: z.string(),
    updatedAt: z.string(),
});

export const clientCreateSchema = clientSchema.pick({
    full_name: true,
    email: true,
    tel: true,
    password: true,
})
export const clientReturnSchema = clientSchema.omit({ password: true})
export const clientSchemaRequest = clientSchema.omit({ id: true, createdAt: true,
    updatedAt: true});

export const clientUpdateSchema = clientSchema.omit({id:true}).partial()

export const clientReturnListSchema = z.array(clientReturnSchema);

export const clientReadSchema = clientReturnSchema.array();

export const clientSchemaTotalResponse = z.object({
    id: z.number(),
    full_name: z.string(),
    email: z.string().email(),
    tel: z.string(),
    contacts: z.array(contactSchemaResponse),
    createdAt: z.string(),
    updatedAt: z.string(),
});

export const clientSchemaTotalRead = z.array(clientSchemaTotalResponse);