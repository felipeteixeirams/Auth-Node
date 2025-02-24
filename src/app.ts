import fastify from "fastify";
import 'dotenv/config';
import '@infrastructure/di/container';
import { setupSwagger } from "@infrastructure/config/swagger";
import { registerRoutes } from "./adapters/http/routes";
import { errorHandler } from "@infrastructure/http/middlewares/errorHandler";
import { registerSchemas } from "@infrastructure/config/schemas";
import knexConfig from '@infrastructure/config/knex';

const app = fastify({ logger: true });

app.decorate('knex', knexConfig);

registerSchemas(app);
setupSwagger(app);

registerRoutes(app);

app.setErrorHandler(errorHandler);

app.addHook('onRequest', (request, reply, done) => {
   request.log.info('Request received');
   done();
});

app.addHook('onResponse', (request, reply, done) => {
   request.log.info('Response sent');
   done();
});

export default app;