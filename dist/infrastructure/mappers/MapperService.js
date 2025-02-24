"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapperService = void 0;
const AppError_1 = require("@shared/erros/AppError");
const UserProfile_1 = require("./UserProfile");
const StatusCodes_1 = require("@shared/enum/StatusCodes");
class MapperService {
    profiles = [];
    constructor() {
        this.profiles.push(new UserProfile_1.UserProfile());
    }
    map(source, destinationType) {
        for (const profile of this.profiles) {
            const mappingFunction = profile.getMappingFunction(source, destinationType);
            if (mappingFunction) {
                return mappingFunction(source);
            }
        }
        const sourceName = source && typeof source === "object" ? source.constructor.name : "Unknown";
        throw new AppError_1.AppError(`Mapping not found for ${sourceName} to ${destinationType.name}`, StatusCodes_1.StatusCodes.Status400BadRequest);
    }
}
exports.mapperService = new MapperService();
