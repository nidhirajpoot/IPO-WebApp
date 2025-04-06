import pkg from 'pg';
const { Pool } = pkg;
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD, 
    port: process.env.DB_PORT,
});

pool.on('connect', () => {
    console.log('connection to the db has been established');
});

export default pool;
// module.exports = {
//     query: (text, params) => pool.query(text, params),
// };
// export const query = (text, params) => pool.query(text, params);
