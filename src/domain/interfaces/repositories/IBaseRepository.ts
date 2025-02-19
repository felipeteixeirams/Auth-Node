import { PaginatedResponse } from "@shared/types/PaginatedResponse";
import { ListQueryParams } from "@shared/types/ListQueryParams";

export interface IBaseRepository<TEntity> {
   create(item: TEntity): Promise<TEntity>;
   findById(id: string): Promise<TEntity | null>;
   findAll(): Promise<TEntity[]>;
   findPaginated(params: ListQueryParams): Promise<PaginatedResponse<TEntity[]>>;
   update(id: string, item: Partial<TEntity>): Promise<TEntity | null>;
   delete(id: string): Promise<boolean>;
}