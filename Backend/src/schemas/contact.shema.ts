import { z } from "zod";

export const contactSchema = z.object({
    id: z.number().int().positive(),
    full_name: z.string().max(200),
    email: z.string().email().max(45).min(4),
    tel: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
});

export const contactCreateSchema = contactSchema.omit({
    id: true,
    client: true,
    createdAt: true,
    updatedAt: true,
});

export const contactReadSchema = z.array(contactSchema);

export const contactUpdateSchema = contactSchema.omit({
    id:true,
    client: true,
    }).partial()

export const contactSchemaResponse = z.object({
        id: z.number(),
        full_name: z.string(),
        email: z.string().email(),
        tel: z.string(),
        createdAt: z.string(),
        updatedAt: z.string(),
});