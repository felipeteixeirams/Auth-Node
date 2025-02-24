"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const tsyringe_1 = require("tsyringe");
const UserApp_1 = __importDefault(require("applications/use-cases/UserApp"));
const UserRepository_1 = __importDefault(require("infrastructure/database/repositories/UserRepository"));
tsyringe_1.container.registerSingleton('UserRepository', UserRepository_1.default);
tsyringe_1.container.registerSingleton('UserApp', UserApp_1.default);
