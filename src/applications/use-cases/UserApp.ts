import { ListQueryParams } from "@shared/types/ListQueryParams";
import { PaginatedResponse } from "@shared/types/PaginatedResponse";
import { inject, injectable } from "tsyringe";
import User from "@domain/entities/User";
import IUserApp from "@domain/interfaces/application/IUserApp";
import IUserRepository from "@domain/interfaces/repositories/IUserRepository";

@injectable()
export default class UserApp implements IUserApp {
   constructor(
      @inject('UserRepository')
      private userRepository: IUserRepository
   ) { }

   public create(user: User): Promise<User> {
      return this.userRepository.create(user);
   }

   public findById(id: string): Promise<User | null> {
      return this.userRepository.findById(id);
   }

   public getList(params: ListQueryParams): Promise<PaginatedResponse<User[]>> {
      return this.userRepository.findPaginated(params);
   }

   public delete(id: string): Promise<boolean> {
      return this.userRepository.delete(id);
   }
}