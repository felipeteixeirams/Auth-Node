"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppError = void 0;
const ErrorCodes_1 = require("@shared/enum/ErrorCodes");
class AppError extends Error {
    statusCode;
    errorCode;
    stack;
    constructor(message, statusCode, errorCode = ErrorCodes_1.ErrorCodes.BAD_REQUEST, stack) {
        super(message);
        this.statusCode = statusCode;
        this.errorCode = errorCode;
        stack ? this.stack = stack : Error.captureStackTrace(this, this.constructor);
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
exports.AppError = AppError;
