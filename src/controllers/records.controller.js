import pool from '../database/database';

const getRecords = async (req, res) => {
  try {
    const response = await pool.query('SELECT * FROM records');
    res.send(response.rows);
  } catch (err) {
    console.log(err)
  }
}

const getByCategory = async (req, res) => {
  try {
    const category = req.params.category
    const response = await pool.query('SELECT * FROM records WHERE category = $1', [category]);
    console.log(response.rows);
    res.json({ items: response.rows })
  } catch (err) {
    console.log(err)
  }
}

const createRecord = async (req, res) => {
  try {
    console.log(req.body)
    const { concept, amount, method, author, category } = req.body;
    const response = await pool.query('INSERT INTO records (concept, amount, method, author, category) VALUES($1, $2, $3, $4, $5)', [
      concept, amount, method, author, category
    ]);
    console.log(response.rows);
    res.send(`The record ${req.body.concept} has been created`)
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  getByCategory,
  getRecords,
  createRecord
}