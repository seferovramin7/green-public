const { parse } = require('pg-connection-string');

module.exports = ({ env }) => {
  // Parse Heroku's DATABASE_URL to extract connection details
  const herokuDbConfig = parse(env('DATABASE_URL'));

  return {
    connection: {
      client: 'postgres',
      connection: {
        host: herokuDbConfig.host,
        port: herokuDbConfig.port,
        database: herokuDbConfig.database,
        user: herokuDbConfig.user,
        password: herokuDbConfig.password,
        ssl: {
          rejectUnauthorized: false, // Heroku requires SSL, set this to false for development
        },
      },
      debug: false,
    },
  };
};
