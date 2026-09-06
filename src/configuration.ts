export default () => ({
  jwtSecret: process.env.JWT_API_KEY || 'default_secret_key',
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT || '', 10) || 5432
  }
});
