import { Pool } from 'pg';

const config = {
  host: 'localhost',
  user: 'postgres',
  password: '12345',
  database: 'budget'
}

const pool = new Pool(config)
module.exports = pool;