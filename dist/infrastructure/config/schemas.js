"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerSchemas = registerSchemas;
async function registerSchemas(app) {
    app.addSchema({
        $id: "UserSchema",
        type: "object",
        properties: {
            id: { type: "string", format: "uuid" },
            name: { type: "string" },
            email: { type: "string", format: "email" },
            password: { type: "string", minLength: 6 },
        },
        required: ["name", "email", "password"],
    });
    app.addSchema({
        $id: "UserResponseSchema",
        type: "object",
        properties: {
            id: { type: "string", format: "uuid" },
            name: { type: "string" },
            email: { type: "string", format: "email" },
            createdAt: { type: "string", format: "date-time" },
        },
    });
}
