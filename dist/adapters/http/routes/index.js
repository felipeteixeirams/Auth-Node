"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRoutes = registerRoutes;
const user_routes_1 = require("./user.routes");
async function registerRoutes(app) {
    await app.register(user_routes_1.userRoutes, { prefix: "/api" });
}
