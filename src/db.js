import { createPool } from 'mysql2/promise';
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_USER, PORT } from './config.js';

export const pool = createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: PORT,
    database: DB_DATABASE
})

// export const pool = createPool({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     port: '3306',
//     database: 'ARQUI'
// })