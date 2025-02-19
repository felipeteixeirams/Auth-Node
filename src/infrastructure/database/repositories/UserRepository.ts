import User from "@domain/entities/User";
import IUserRepository from "@domain/interfaces/repositories/IUserRepository";
import BaseRepository from "./BaseRepository";

export default class UserRepository extends BaseRepository<User> implements IUserRepository { }