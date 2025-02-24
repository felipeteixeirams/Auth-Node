"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
require("dotenv/config");
require("@infrastructure/di/container");
const swagger_1 = require("@infrastructure/config/swagger");
const routes_1 = require("./adapters/http/routes");
const errorHandler_1 = require("@infrastructure/http/middlewares/errorHandler");
const schemas_1 = require("@infrastructure/config/schemas");
const app = (0, fastify_1.default)({ logger: true });
(0, schemas_1.registerSchemas)(app);
(0, swagger_1.setupSwagger)(app);
(0, routes_1.registerRoutes)(app);
app.setErrorHandler(errorHandler_1.errorHandler);
app.addHook('onRequest', (request, reply, done) => {
    request.log.info('Request received');
    done();
});
app.addHook('onResponse', (request, reply, done) => {
    request.log.info('Response sent');
    done();
});
exports.default = app;
