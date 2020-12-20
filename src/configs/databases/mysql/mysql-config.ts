import { registerAs } from '@nestjs/config';

export default registerAs('mysql', () => ({
  host: process.env.DB_MYSQL_HOST,
  port: parseInt(process.env.DB_MYSQL_PORT, 10),
  username: process.env.DB_MYSQL_USERNAME,
  password: process.env.DB_MYSQL_PASSWORD,
  database: process.env.DB_MYSQL_DATABASE
}));
