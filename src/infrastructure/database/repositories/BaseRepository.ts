import { ListQueryParams } from "@shared/types/ListQueryParams";
import { PaginatedResponse } from "@shared/types/PaginatedResponse";
import { IBaseRepository } from "@domain/interfaces/repositories/IBaseRepository";
import knex from "@infrastructure/config/knex";

export default abstract class BaseRepository<TEntity> implements IBaseRepository<TEntity> {
   protected tableName: string;

   constructor(tableName: string) {
      this.tableName = tableName;
   }

   async create(item: TEntity): Promise<TEntity> {
      const [createdItem] = await knex(this.tableName).insert(item).returning('*');
      return createdItem;
   }

   async findById(id: string): Promise<any> {
      const entity = await knex(this.tableName).where({ id }).first();
      return entity || null;
   }

   async findAll(): Promise<TEntity[]> {
      return await knex(this.tableName).select('*');
   }

   async findPaginated({
      page = 1,
      limit = 10
   }: ListQueryParams): Promise<PaginatedResponse<TEntity[]>> {
      const offset = (page - 1) * limit;

      const itemCount = Number((await knex(this.tableName).count('* as count'))[0]?.count || 0);

      const data: TEntity[] = await knex(this.tableName)
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

   async update(id: string, item: TEntity): Promise<TEntity | any> {
      const [updatedItem] = await knex(this.tableName)
         .where({ id })
         .update(item)
         .returning("*");
      return updatedItem ?? null;
   }

   async delete(id: string): Promise<boolean> {
      const deletedRows = await knex(this.tableName).where({ id }).del();
      return deletedRows > 0;
   }
}