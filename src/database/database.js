import { Pool } from 'pg';

const config = {
  host: 'localhost',
  user: 'postgres',
  password: '',
  database: 'budget',
  port: '5432'
}

const pool = new Pool(config)
export default pool;