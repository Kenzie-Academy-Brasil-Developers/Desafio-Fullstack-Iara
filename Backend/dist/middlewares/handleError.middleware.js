"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleErrors = void 0;
const appError_1 = require("../errors/appError");
const zod_1 = require("zod");
const jsonwebtoken_1 = require("jsonwebtoken");
const handleErrors = (err, req, res, next) => {
    if (err instanceof appError_1.AppError) {
        return res.status(err.status).json({ message: err.message });
    }
    if (err instanceof zod_1.ZodError) {
        return res.status(400).json({ message: err.flatten().fieldErrors });
    }
    if (err instanceof jsonwebtoken_1.JsonWebTokenError) {
        return res.status(401).json({ message: err.message });
    }
    return res.status(500).json({ message: 'Internal server error' });
};
exports.handleErrors = handleErrors;
