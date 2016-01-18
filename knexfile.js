module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/booksbugs'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
