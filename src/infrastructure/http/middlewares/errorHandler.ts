import { type FastifyReply, type FastifyRequest } from "fastify";
import { AppError } from "@shared/erros/AppError";
import logger from "@infrastructure/config/logger";

export function errorHandler(
  error: Error,
  request: FastifyRequest,
  reply: FastifyReply
) {
  if (error instanceof AppError) {
    return reply.status(error.statusCode).send({
      status: 'error',
      errorCode: error.errorCode,
      message: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined,
    });
  }

  logger.error({
    message: error.message,
    stack: error.stack,
    method: request.method,
    url: request.url,
  });

  return reply.status(500).send({
    status: 'error',
    errorCode: 'InternalServerError',
    message: 'Erro interno do servidor',
  });
}