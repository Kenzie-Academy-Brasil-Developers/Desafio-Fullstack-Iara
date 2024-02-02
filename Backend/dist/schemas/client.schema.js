"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientSchemaTotalRead = exports.clientSchemaTotalResponse = exports.clientReadSchema = exports.clientReturnListSchema = exports.clientUpdateSchema = exports.clientSchemaRequest = exports.clientReturnSchema = exports.clientCreateSchema = exports.clientSchema = void 0;
const zod_1 = require("zod");
const contact_shema_1 = require("./contact.shema");
exports.clientSchema = zod_1.z.object({
    id: zod_1.z.number().int().positive(),
    full_name: zod_1.z.string().max(200).min(7),
    email: zod_1.z.string().email().max(45).min(4),
    tel: zod_1.z.string(),
    password: zod_1.z.string().max(120).min(4),
    createdAt: zod_1.z.string(),
    updatedAt: zod_1.z.string(),
});
exports.clientCreateSchema = exports.clientSchema.pick({
    full_name: true,
    email: true,
    tel: true,
    password: true,
});
exports.clientReturnSchema = exports.clientSchema.omit({ password: true });
exports.clientSchemaRequest = exports.clientSchema.omit({ id: true, createdAt: true,
    updatedAt: true });
exports.clientUpdateSchema = exports.clientSchema.omit({ id: true }).partial();
exports.clientReturnListSchema = zod_1.z.array(exports.clientReturnSchema);
exports.clientReadSchema = exports.clientReturnSchema.array();
exports.clientSchemaTotalResponse = zod_1.z.object({
    id: zod_1.z.number(),
    full_name: zod_1.z.string(),
    email: zod_1.z.string().email(),
    tel: zod_1.z.string(),
    contacts: zod_1.z.array(contact_shema_1.contactSchemaResponse),
    createdAt: zod_1.z.string(),
    updatedAt: zod_1.z.string(),
});
exports.clientSchemaTotalRead = zod_1.z.array(exports.clientSchemaTotalResponse);
