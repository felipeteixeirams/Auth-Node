"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pino_1 = __importDefault(require("pino"));
const transport = pino_1.default.transport({
    target: 'pino-pretty',
    options: {
        colorize: true,
        translateTime: 'HH:MM:ss Z',
        ignore: 'pid,hostname'
    }
});
const logger = (0, pino_1.default)({
    level: 'info'
}, transport);
exports.default = logger;
