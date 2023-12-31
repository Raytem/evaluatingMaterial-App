import { registerAs } from '@nestjs/config';
import { stringToBoolean } from 'src/utils/string-to-boolean';

export const postgresConfig = registerAs('postgres', () => ({
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: stringToBoolean(process.env.DB_SYNCHRONIZE),
}));
