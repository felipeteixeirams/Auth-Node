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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const User_1 = __importDefault(require("@domain/entities/User"));
const AppError_1 = require("@shared/erros/AppError");
const ErrorMessages_1 = require("@shared/enum/ErrorMessages");
const StatusCodes_1 = require("@shared/enum/StatusCodes");
const MapperService_1 = require("@infrastructure/mappers/MapperService");
let UserApp = class UserApp {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async create(request) {
        try {
            const user = MapperService_1.mapperService.map(request, User_1.default);
            return this.userRepository.create(user);
        }
        catch (error) {
            throw new AppError_1.AppError(ErrorMessages_1.ErrorMessages.ERROR_CREATING_USER, StatusCodes_1.StatusCodes.Status500InternalServerError);
        }
    }
    findById(id) {
        return this.userRepository.findById(id);
    }
    getList(params) {
        return this.userRepository.findPaginated(params);
    }
    delete(id) {
        return this.userRepository.delete(id);
    }
};
UserApp = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)('UserRepository')),
    __metadata("design:paramtypes", [Object])
], UserApp);
exports.default = UserApp;
