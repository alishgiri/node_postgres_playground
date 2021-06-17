const { knexSnakeCaseMappers } = require("objection");

const { DB_USER, DB_NAME, DB_PASSWORD } = process.env;

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      user: "postgres",
      host: "localhost",
      password: "postgres",
      database: "playground_pg_db",
      // user: DB_USER,
      // database: DB_NAME,
      // host: "localhost",
      // password: DB_PASSWORD,
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
