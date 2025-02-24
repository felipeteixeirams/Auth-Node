"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class BaseEntity {
    id;
    createdAt;
    updatedAt;
    constructor(id, createdAt, updatedAt) {
        this.id = id || (0, uuid_1.v4)();
        this.createdAt = createdAt || new Date();
        this.updatedAt = updatedAt || new Date();
    }
    updateTimestamps() {
        this.updatedAt = new Date();
    }
}
exports.default = BaseEntity;
