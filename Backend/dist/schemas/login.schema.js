"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientLoginSchema = void 0;
const client_schema_1 = require("./client.schema");
exports.clientLoginSchema = client_schema_1.clientSchema.pick({
    email: true,
    password: true,
});
