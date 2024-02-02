"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyPermissions = void 0;
const appError_1 = require("../errors/appError");
const verifyPermissions = (req, res, next) => {
    const { id } = req.params;
    const { sub } = res.locals.decoded;
    if (id !== sub)
        throw new appError_1.AppError('Insufficient permission', 403);
    return next();
};
exports.verifyPermissions = verifyPermissions;
