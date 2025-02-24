"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseEntity_1 = __importDefault(require("./base/BaseEntity"));
class User extends BaseEntity_1.default {
    fullName;
    email;
    password;
    constructor(fullName, email, password, id, createdAt, updatedAt) {
        super(id, createdAt, updatedAt);
        this.fullName = fullName;
        this.email = email;
        this.password = password;
    }
}
exports.default = User;
