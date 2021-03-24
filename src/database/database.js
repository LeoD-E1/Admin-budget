const { Pool } = require('pg')

const config = {
  user: 'postgres',
  host: 'localhost',
  password: '',
  database: 'budget'
}

const pool = new Pool(config)

const getUsers = async(req, res) => {
  const response = await pool.query('select * from users');
  res.json(response.rows);
}

module.exports = {
  getUsers
}