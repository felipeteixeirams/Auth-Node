"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const fastify_decorators_1 = require("fastify-decorators");
let UserController = class UserController {
    userApp;
    constructor(userApp) {
        this.userApp = userApp;
    }
    async create(request, reply) {
        const user = await this.userApp.create(request.body);
        return reply.status(201).send(user);
    }
    async findById(request, reply) {
        try {
            const user = await this.userApp.findById(request.params.id);
            if (!user) {
                return reply.status(404).send({ error: "User not found" });
            }
            return reply.send(user);
        }
        catch (error) {
            return reply.status(500).send({ error: error.message });
        }
    }
    async getList(request, reply) {
        try {
            const users = await this.userApp.getList(request.query);
            return reply.send(users);
        }
        catch (error) {
            return reply.status(500).send({ error: error.message });
        }
    }
    async delete(request, reply) {
        try {
            const deleted = await this.userApp.delete(request.params.id);
            if (!deleted) {
                return reply.status(404).send({ error: "User not found" });
            }
            return reply.status(204).send();
        }
        catch (error) {
            return reply.status(500).send({ error: error.message });
        }
    }
};
__decorate([
    (0, fastify_decorators_1.POST)({
        url: '/',
        schema: {
            summary: 'Criar usuário',
            tags: ['Users'],
            body: { $ref: "#/definitions/UserSchema" },
            response: {
                201: { $ref: "#/definitions/UserResponseSchema" },
            },
        },
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
UserController = __decorate([
    (0, fastify_decorators_1.Controller)("/users"),
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)('UserApp')),
    __metadata("design:paramtypes", [Object])
], UserController);
exports.default = UserController;
