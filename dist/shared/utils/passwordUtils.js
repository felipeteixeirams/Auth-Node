"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashPassword = hashPassword;
exports.verifyPassword = verifyPassword;
const ErrorCodes_1 = require("@shared/enum/ErrorCodes");
const ErrorMessages_1 = require("@shared/enum/ErrorMessages");
const StatusCodes_1 = require("@shared/enum/StatusCodes");
const AppError_1 = require("@shared/erros/AppError");
const bcrypt_1 = __importDefault(require("bcrypt"));
const saltRounds = 10;
async function hashPassword(password) {
    try {
        return await bcrypt_1.default.hash(password, saltRounds);
    }
    catch (error) {
        throw new AppError_1.AppError(ErrorMessages_1.ErrorMessages.ERROR_CREATING_USER, StatusCodes_1.StatusCodes.Status500InternalServerError, ErrorCodes_1.ErrorCodes.INTERNAL_SERVER_ERROR);
    }
}
async function verifyPassword(password, hash) {
    try {
        return await bcrypt_1.default.compare(password, hash);
    }
    catch (error) {
        throw new AppError_1.AppError('Error ao verificar a senha', StatusCodes_1.StatusCodes.Status400BadRequest);
    }
}
