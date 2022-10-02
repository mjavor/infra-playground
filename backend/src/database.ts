import knex from 'knex';

export const connection = knex({
  client: 'mysql',
  connection: process.env.DB_URL,
});

export const checkConnection = async () => {
  await connection.raw('SELECT 1+1');
};
