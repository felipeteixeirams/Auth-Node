import app from "./app";
import logger from "@infrastructure/config/logger";
import { registerRoutes } from "./adapters/http/routes";
const fastifySwagger = require("fastify-swagger");
import fastifySwaggerUI from "@fastify/swagger-ui";
import { FastifyRequest, FastifyReply } from "fastify";

const start = async () => {
   app.register(fastifySwagger, {
      routePrefix: "/documentation",
      swagger: {
         info: {
            title: "API Example",
            description: "API for managing users and other resources",
            version: "1.0.0",
         },
         tags: [
            { name: "users", description: "User-related endpoints" }
         ],
         consumes: ["application/json"],
         produces: ["application/json"],
      },
      uiConfig: {
         docExpansion: "full",
         deepLinking: false,
         filter: true,
      },
      uiHooks: {
         onRequest: (req: FastifyRequest, res: FastifyReply) => { },
         preHandler: (req: FastifyRequest, res: FastifyReply) => { },
      },
   });

   await registerRoutes(app);

   app.register(fastifySwaggerUI, {
      routePrefix: "/documentation"
   });

   try {
      await app.listen({ port: 3000 });
      logger.info('Server is running on http://localhost:3000');
   } catch (err) {
      app.log.error(err);
      process.exit(1);
   }
}

start();