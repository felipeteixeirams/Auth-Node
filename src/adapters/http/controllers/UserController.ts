import { inject, injectable } from "tsyringe";
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import IUserApp from "@domain/interfaces/application/IUserApp";
import User from "@domain/entities/User";
import { ListQueryParams } from "@shared/types/ListQueryParams";

@injectable()
export default class UserController {
   constructor(
      @inject('UserApp')
      private userApp: IUserApp
   ) { }

   async create(request: FastifyRequest<{ Body: User }>, reply: FastifyReply) {
      try {
         const user = await this.userApp.create(request.body);
         return reply.status(201).send(user);
      } catch (error: any) {
         return reply.status(500).send({ error: error.message });
      }
   }
   async findById(request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) {
      try {
         const user = await this.userApp.findById(request.params.id);
         if (!user) {
            return reply.status(404).send({ error: "User not found" });
         }
         return reply.send(user);
      } catch (error: any) {
         return reply.status(500).send({ error: error.message });
      }
   }

   async getList(request: FastifyRequest<{ Querystring: ListQueryParams }>, reply: FastifyReply) {
      try {
         const users = await this.userApp.getList(request.query);
         return reply.send(users);
      } catch (error: any) {
         return reply.status(500).send({ error: error.message });
      }
   }

   async delete(request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) {
      try {
         const deleted = await this.userApp.delete(request.params.id);
         if (!deleted) {
            return reply.status(404).send({ error: "User not found" });
         }
         return reply.status(204).send();
      } catch (error: any) {
         return reply.status(500).send({ error: error.message });
      }
   }
}