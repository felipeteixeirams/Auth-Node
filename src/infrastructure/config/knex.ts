import Knex from "knex";
import path from "path";

export default Knex({
   client: 'pg',
   connection: process.env.DATABASE_URL,
   migrations: {
      directory: path.resolve('src/infrastructure/database/migrations'),
      extension: 'ts'
   },
   pool: { min: 2, max: 10 }
});