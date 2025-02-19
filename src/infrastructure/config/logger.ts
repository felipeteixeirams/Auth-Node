import pino from "pino";

const transport = pino.transport({
   target: 'pino-pretty',
   options: {
      colorize: true,
      translateTime: 'HH:MM:ss Z',
      ignore: 'pid,hostname'
   }
});

const logger = pino({
   level: 'info'
}, transport);

export default logger;