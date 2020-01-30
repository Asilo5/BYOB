// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/veganInvasion',
    migrations: {
      directory: './db/migrations'
    },
    useNullAsDefault: true
  }
};
