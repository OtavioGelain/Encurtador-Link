import 'reflect-metadata';
import { DataSource } from 'typeorm';
import 'dotenv/config';
import { Url } from '../modules/url/entities/Url';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [Url],
    migrations: ['src/config/migrations/*.ts'],
    synchronize: false,
    logging: false,
});