"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = __importDefault(require("knex"));
exports.default = (0, knex_1.default)({
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
        directory: '@infrastructure/database/migrations',
        extension: 'ts'
    },
    pool: { min: 2, max: 10 }
});
