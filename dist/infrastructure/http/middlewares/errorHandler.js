"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = errorHandler;
const AppError_1 = require("@shared/erros/AppError");
const logger_1 = __importDefault(require("@infrastructure/config/logger"));
function errorHandler(error, request, reply) {
    if (error instanceof AppError_1.AppError) {
        return reply.status(error.statusCode).send({
            status: 'error',
            errorCode: error.errorCode,
            message: error.message,
            stack: process.env.NODE_ENV === 'development' ? error.stack : undefined,
        });
    }
    logger_1.default.error({
        message: error.message,
        stack: error.stack,
        method: request.method,
        url: request.url,
    });
    return reply.status(500).send({
        status: 'error',
        errorCode: 'InternalServerError',
        message: 'Erro interno do servidor',
    });
}
