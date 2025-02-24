import app from "./app";
import logger from "@infrastructure/config/logger";

const PORT = Number(process.env.PORT) || 3000;

const start = async () => {
   try {
      await app.listen({ port: PORT });
      logger.info(`Servidor rodando em http://localhost:${PORT}`);
   } catch (err) {
      app.log.error(err);
      process.exit(1);
   }
}

start();