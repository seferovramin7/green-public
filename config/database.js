const path = require('path');
// module.exports = ({ env }) => ({
//   connection: {
//     client: 'postgres',
//     connection: {
//       host: env('DATABASE_HOST', 'localhost'),
//       port: env.int('DATABASE_PORT', 5432),
//       database: env('DATABASE_NAME', 'postgres'),
//       user: env('DATABASE_USERNAME', 'postgres'),
//       password: env('DATABASE_PASSWORD', '12345'),
//       schema: env('DATABASE_SCHEMA', 'public'),
//       ssl: false,
//     },
//     debug: false,
//   },
// });

module.exports = ({ env }) => {
  const databaseConfig = parse(env('DATABASE_URL'));

  return {
    connection: {
      client: 'postgres',
      connection: {
        host: databaseConfig.host,
        port: databaseConfig.port,
        database: databaseConfig.database,
        user: databaseConfig.user,
        password: databaseConfig.password,
        ssl: { rejectUnauthorized: false }, // Enable SSL, and set to rejectUnauthorized: false for Heroku
      },
      debug: false,
    },
  };
};
