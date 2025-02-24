"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSwagger = setupSwagger;
const swagger_1 = __importDefault(require("@fastify/swagger"));
const swagger_ui_1 = __importDefault(require("@fastify/swagger-ui"));
const fastify_decorators_1 = require("fastify-decorators");
const path_1 = __importDefault(require("path"));
async function setupSwagger(app) {
    app.register(fastify_decorators_1.bootstrap, {
        directory: path_1.default.join(__dirname, "../../adapters/http/controllers"),
        mask: /\.controller\./
    });
    app.register(swagger_1.default, {
        swagger: {
            info: {
                title: "Auth Node - Boilerplate",
                description: "API for managing users and other resources",
                version: "1.0.0",
            },
            tags: [{ name: "Users", description: "User-related endpoints" }],
            definitions: {
                UserSchema: {
                    type: "object",
                    properties: {
                        name: { type: "string" },
                        email: { type: "string", format: "email" },
                        password: { type: "string" }
                    },
                    required: ["name", "email", "password"]
                },
                UserResponseSchema: {
                    type: "object",
                    properties: {
                        id: { type: "string" },
                        name: { type: "string" },
                        email: { type: "string", format: "email" },
                    }
                }
            },
            consumes: ["application/json"],
            produces: ["application/json"],
        },
    });
    app.register(swagger_ui_1.default, {
        routePrefix: "/swagger/documentation",
        uiConfig: {
            docExpansion: "full",
            deepLinking: false,
            filter: true,
        },
    });
}
