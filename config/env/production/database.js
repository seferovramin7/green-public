const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'ec2-35-169-9-79.compute-1.amazonaws.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'd6aoa6mkf3mdlc'),
      user: env('DATABASE_USERNAME', 'hxrnzwmdupwxhk'),
      password: env('DATABASE_PASSWORD', '92d605585cad45f9f1822668be42c455f26b98476733047873b5d427d7ec0086'),
      ssl: true,
    },
    debug: false,
  },
});
