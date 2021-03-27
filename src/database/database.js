import { Pool } from 'pg';

const config = {
  user: 'ṕostgres',
  host: 'localhost',
  password: 'hola',
  database: 'budget'
}

const pool = new Pool(config)

module.exports = pool;