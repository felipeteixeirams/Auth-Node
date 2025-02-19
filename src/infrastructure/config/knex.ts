import Knex from "knex";

export default Knex({
   client: 'pg',
   connection: process.env.DATABASE_URL,
   migrations: {
      directory: '@shared/infra/database/migrations',
      extension: 'ts'
   },
   pool: { min: 2, max: 10 }
});