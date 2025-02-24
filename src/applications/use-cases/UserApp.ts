import { ListQueryParams } from "@shared/types/ListQueryParams";
import { PaginatedResponse } from "@shared/types/PaginatedResponse";
import { inject, injectable } from "tsyringe";
import User from "@domain/entities/User";
import IUserApp from "@domain/interfaces/application/IUserApp";
import IUserRepository from "@domain/interfaces/repositories/IUserRepository";
import type { RequestUserDTO } from "@applications/dtos/User/RequestUserDTO";
import { AppError } from "@shared/erros/AppError";
import { ErrorMessages } from "@shared/enum/ErrorMessages";
import { StatusCodes } from "@shared/enum/StatusCodes";
import { mapperService } from "@infrastructure/mappers/MapperService";

@injectable()
export default class UserApp implements IUserApp {
   constructor(
      @inject('UserRepository')
      private userRepository: IUserRepository,
   ) { }

   public async create(request: RequestUserDTO): Promise<User> {
      try {
         const user: User = mapperService.map<RequestUserDTO, User>(request, User);
         return this.userRepository.create(user);
      } catch (error) {
         throw new AppError(
            ErrorMessages.ERROR_CREATING_USER,
            StatusCodes.Status500InternalServerError
         );
      }
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