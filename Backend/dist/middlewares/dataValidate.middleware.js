"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateValidation = void 0;
const dateValidation = (schema) => (req, res, next) => {
    const validatedDate = schema.parse(req.body);
    req.body = validatedDate;
    return next();
};
exports.dateValidation = dateValidation;
