"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = userRoutes;
const tsyringe_1 = require("tsyringe");
const UserController_1 = __importDefault(require("@adapters/http/controllers/UserController"));
async function userRoutes(userRoute) {
    const userController = tsyringe_1.container.resolve(UserController_1.default);
    userRoute.post("/Users", userController.create.bind(userController));
    userRoute.get("/Users/:id", userController.findById.bind(userController));
    userRoute.get("/Users", userController.getList.bind(userController));
    userRoute.delete("/Users/:id", userController.delete.bind(userController));
}
