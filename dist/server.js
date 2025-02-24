"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const logger_1 = __importDefault(require("@infrastructure/config/logger"));
const PORT = Number(process.env.PORT) || 3000;
const start = async () => {
    try {
        await app_1.default.listen({ port: PORT });
        logger_1.default.info(`Servidor rodando em http://localhost:${PORT}`);
    }
    catch (err) {
        app_1.default.log.error(err);
        process.exit(1);
    }
};
start();
