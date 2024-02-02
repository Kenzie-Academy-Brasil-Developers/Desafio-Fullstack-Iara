"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactSchemaResponse = exports.contactUpdateSchema = exports.contactReadSchema = exports.contactCreateSchema = exports.contactSchema = void 0;
const zod_1 = require("zod");
exports.contactSchema = zod_1.z.object({
    id: zod_1.z.number().int().positive(),
    full_name: zod_1.z.string().max(200),
    email: zod_1.z.string().email().max(45).min(4),
    tel: zod_1.z.string(),
    createdAt: zod_1.z.string(),
    updatedAt: zod_1.z.string(),
});
exports.contactCreateSchema = exports.contactSchema.omit({
    id: true,
    client: true,
    createdAt: true,
    updatedAt: true,
});
exports.contactReadSchema = zod_1.z.array(exports.contactSchema);
exports.contactUpdateSchema = exports.contactSchema.omit({
    id: true,
    client: true,
}).partial();
exports.contactSchemaResponse = zod_1.z.object({
    id: zod_1.z.number(),
    full_name: zod_1.z.string(),
    email: zod_1.z.string().email(),
    tel: zod_1.z.string(),
    createdAt: zod_1.z.string(),
    updatedAt: zod_1.z.string(),
});
