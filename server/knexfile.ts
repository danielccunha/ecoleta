const path = require("path");

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: path.resolve(__dirname, "src", "database", "database.sqlite"),
    },
    migrations: {
      tableName: "knex_migrations",
      directory: path.resolve(__dirname, "src", "database", "migrations"),
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`,
    },
    useNullAsDefault: true,
  },
};
