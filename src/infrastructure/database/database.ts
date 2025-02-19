import config from "infrastructure/config/knex";
import knex from "knex";

const db = knex(config);

export default db;