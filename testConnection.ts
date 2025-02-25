import 'dotenv/config';
import Knex from 'knex';
import knexConfig from './src/knexfile';

const environment = process.env.NODE_ENV || 'development';
const config = knexConfig[environment];

const db = Knex(config);

db.raw('SELECT 1')
  .then(() => {
    console.log('Conexão com o banco de dados foi bem-sucedida.');
    process.exit(0);
  })
  .catch((err) => {
    console.error('Erro ao conectar ao banco de dados:', err);
    process.exit(1);
  });
