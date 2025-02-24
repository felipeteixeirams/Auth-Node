import { FastifyInstance } from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUI from "@fastify/swagger-ui";
import { bootstrap } from "fastify-decorators";
import path from "path";

export async function setupSwagger(app: FastifyInstance) {
  app.register(bootstrap, {
    directory: path.join(__dirname, "../../adapters/http/controllers"),
    mask: /\.controller\./
  });

  app.register(fastifySwagger, {
    swagger: {
      info: {
        title: "Auth Node - Boilerplate",
        description: "API for managing users and other resources",
        version: "1.0.0",
      },
      tags: [{ name: "Users", description: "User-related endpoints" }],
      definitions: {
        UserSchema: {
          type: "object",
          properties: {
            name: { type: "string" },
            email: { type: "string", format: "email" },
            password: { type: "string" }
          },
          required: ["name", "email", "password"]
        },
        UserResponseSchema: {
          type: "object",
          properties: {
            id: { type: "string" },
            name: { type: "string" },
            email: { type: "string", format: "email" },
          }
        }
      },
      consumes: ["application/json"],
      produces: ["application/json"],
    },
  });

  app.register(fastifySwaggerUI, {
    routePrefix: "/swagger/documentation",
    uiConfig: {
      docExpansion: "full",
      deepLinking: false,
      filter: true,
    },
  });
}