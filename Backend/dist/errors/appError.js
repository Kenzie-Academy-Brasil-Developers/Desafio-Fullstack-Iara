"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppError = void 0;
class AppError extends Error {
    constructor(message, status = 400) {
        super(message);
        this.message = message;
        this.status = status;
        this.status = status;
        this.message = message;
    }
}
exports.AppError = AppError;
