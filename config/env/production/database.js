const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: 'srv-captain--database',
      port: 5432,
      database: 'cocktailDb',
      user: 'cocktailUser',
      password: 'test',
      ssl: false
    },
    debug: false,
  },
});
