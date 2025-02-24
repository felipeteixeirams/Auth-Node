import type { RequestUserDTO } from "@applications/dtos/User/RequestUserDTO";
import User from "@domain/entities/User";
import { ListQueryParams } from "@shared/types/ListQueryParams";
import { PaginatedResponse } from "@shared/types/PaginatedResponse";

export default interface IUserApp {
   create(request: RequestUserDTO): Promise<User>;
   findById(id: string): Promise<User | null>;
   getList(params: ListQueryParams): Promise<PaginatedResponse<User[]>>;
   delete(id: string): Promise<boolean>;
}