"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("@infrastructure/database/database"));
class BaseRepository {
    tableName;
    constructor(tableName) {
        this.tableName = tableName;
    }
    async create(item) {
        const [createdItem] = await (0, database_1.default)(this.tableName).insert(item).returning('*');
        return createdItem;
    }
    async findById(id) {
        const entity = await (0, database_1.default)(this.tableName).where({ id }).first();
        return entity || null;
    }
    async findAll() {
        return await (0, database_1.default)(this.tableName).select('*');
    }
    async findPaginated({ page = 1, limit = 10 }) {
        const offset = (page - 1) * limit;
        const itemCount = Number((await (0, database_1.default)(this.tableName).count('* as count'))[0]?.count || 0);
        const data = await (0, database_1.default)(this.tableName)
            .limit(limit)
            .offset(offset)
            .select('*');
        const pageCount = Math.ceil(itemCount / limit);
        return {
            data,
            pageCount,
            itemCount: itemCount,
        };
    }
    async update(id, item) {
        const [updatedItem] = await (0, database_1.default)(this.tableName)
            .where({ id })
            .update(item)
            .returning("*");
        return updatedItem ?? null;
    }
    async delete(id) {
        const deletedRows = await (0, database_1.default)(this.tableName).where({ id }).del();
        return deletedRows > 0;
    }
}
exports.default = BaseRepository;
