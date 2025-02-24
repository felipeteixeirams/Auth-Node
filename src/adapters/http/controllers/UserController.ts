import { inject, injectable } from "tsyringe";
import { FastifyReply, FastifyRequest } from "fastify";
import { Controller, POST, GET, DELETE, type RouteConfig } from "fastify-decorators";
import IUserApp from "@domain/interfaces/application/IUserApp";
import { ListQueryParams } from "@shared/types/ListQueryParams";
import type { RequestUserDTO } from "@applications/dtos/User/RequestUserDTO";

@Controller("/users")
@injectable()
export default class UserController {
   constructor(
      @inject('UserApp')
      private userApp: IUserApp
   ) { }

   @POST({
      url: '/',
      schema: {
         summary: 'Criar usuário',
         tags: ['Users'],
         body: { $ref: "#/definitions/UserSchema" },
         response: {
            201: { $ref: "#/definitions/UserResponseSchema" },
         },
      },
   } as RouteConfig)
   async create(request: FastifyRequest<{ Body: RequestUserDTO }>, reply: FastifyReply) {
      const user = await this.userApp.create(request.body);
      return reply.status(201).send(user);
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