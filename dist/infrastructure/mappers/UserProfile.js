"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProfile = void 0;
const User_1 = __importDefault(require("@domain/entities/User"));
const passwordUtils_1 = require("@shared/utils/passwordUtils");
class UserProfile {
    getMappingFunction(source, destinationType) {
        if (this.isRequestUserDTO(source) && destinationType === User_1.default) {
            return this.mapRequestUserDTOToUser;
        }
        return null;
    }
    isRequestUserDTO(dto) {
        return dto && typeof dto.fullName === "string"
            && typeof dto.email === "string"
            && typeof dto.password === "string";
    }
    async mapRequestUserDTOToUser(dto) {
        const passwordHashed = await (0, passwordUtils_1.hashPassword)(dto.password);
        return new User_1.default(dto.fullName, dto.email, passwordHashed);
    }
}
exports.UserProfile = UserProfile;
