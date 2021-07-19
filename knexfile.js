const { knexSnakeCaseMappers } = require("objection");

const { DB_USER, DB_NAME, DB_PASSWORD } = process.env;

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      // USE THIS FOR knex migrate AND seed.
      // user: "postgres",
      // host: "localhost",
      // password: "postgres",
      // database: "postgres",

      user: DB_USER,
      database: DB_NAME,
      password: DB_PASSWORD,
      host: "playground_pg_db",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./db/migrations"
    },
    seeds: {
      directory: "./db/seeds",
    },
    ...knexSnakeCaseMappers,
  },
};
