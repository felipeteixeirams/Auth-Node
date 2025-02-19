import User from "@domain/entities/User";
import { IBaseRepository } from "./IBaseRepository";

export default interface IUserRepository extends IBaseRepository<User> { }