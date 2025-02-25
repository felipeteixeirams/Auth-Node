import 'dotenv/config';
import type { Knex } from "knex";
import path from "path";

const migrationsPath = path.resolve(__dirname, 'infrastructure/database/migrations');

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: migrationsPath,
      extension: 'ts',
    },
    pool: { min: 2, max: 10 }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: migrationsPath,
      extension: 'ts',
    },
    pool: { min: 2, max: 10 }
  }
};

export default config;
