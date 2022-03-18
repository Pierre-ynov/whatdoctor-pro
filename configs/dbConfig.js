const env = process.env;

const config = {
  db: { /* do not put password or any sensitive info here, done only for demo */
    host: env.DB_HOST || 'balarama.db.elephantsql.com',
    port: env.DB_PORT || '5432',
    user: env.DB_USER || 'sawencyh',
    password: env.DB_PASSWORD || 'kh1a8LH4VnthOWJZD5NP10LVMCYkBAnS',
    database: env.DB_NAME || 'sawencyh',
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};

module.exports = config;