import User from "@domain/entities/User";
import { ListQueryParams } from "@shared/types/ListQueryParams";
import { PaginatedResponse } from "@shared/types/PaginatedResponse";

export default interface IUserApp {
   create(user: User): Promise<User>;
   findById(id: string): Promise<User | null>;
   getList(params: ListQueryParams): Promise<PaginatedResponse<User[]>>;
   delete(id: string): Promise<boolean>;
}