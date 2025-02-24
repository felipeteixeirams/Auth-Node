"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = __importDefault(require("@infrastructure/config/knex"));
const knex_2 = __importDefault(require("knex"));
const db = (0, knex_2.default)(knex_1.default);
exports.default = db;
