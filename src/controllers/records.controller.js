import { pool } from '../database/database';

const getRecords = async (req, res) => {
  const response = await pool.query('SELECT * FROM records');
  res.send(response.rows);
}

module.exports = {
  getRecords
}