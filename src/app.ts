import fastify from "fastify";
import logger from "@infrastructure/config/logger";
import 'dotenv/config';
import '@infrastructure/di/container';

const app = fastify({ logger: false });

app.setErrorHandler((error, request, reply) => {
   logger.error('Unhandled error', error);
   reply.status(500).send({ error: 'Internal Server Error' });
});

app.addHook('onRequest', (request, reply, done) => {
   request.log.info('Request received');
   done();
});

app.addHook('onResponse', (request, reply, done) => {
   request.log.info('Response sent');
   done();
});

export default app;