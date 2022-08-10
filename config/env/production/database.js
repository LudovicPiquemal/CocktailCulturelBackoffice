const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: 'srv-captain--database',
      port: 5432,
      database: 'cocktailDb',
      user: 'cocktailUser',
      password: process.env.DATABASE_PASSWORD,
      ssl: false
    },
    debug: false,
  },
});
