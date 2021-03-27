import { pool } from '../database/database';

const getUserByUsername = async (req, res) => {
  try {
    const user = req.params.user
    const response = await pool.query('SELECT * FROM users WHERE userName = $1', [user]);
    res.json(response.rows);
  } catch (err) {
    console.log(err)
  }
}

const updateUserById = async (req, res) => {
  try {
    const id = req.params.id
    const { username, email, password } = req.body;
    const response = await pool.query('UPDATE users SET userName = $1, email = $2, passwordHash= $3 WHERE userId = $4', [username, email, password, id])
    console.log(id, username, email, password)
    res.send(`user ${id} updated successfully`)
  } catch (err) {
    console.log(err)
  }
}

const createUser = async (req, res) => {
  try {
    console.log(req.body)
    const { username, email, password } = req.body
    const response = await pool.query('INSERT INTO users (userName, email, passwordHash) VALUES($1, $2, $3)', [username, email, password])
    console.log(response.rows)
    res.send(`El usuario ${req.body.username} ha sido guardado correctamente`)
  } catch (err) {
    console.log(err)
  }
}

const deleteUserById = async (req, res) => {
  try {
    const id = req.params.id
    const response = await pool.query('DELETE FROM users WHERE userId = $1', [id]);
    console.log(response)
    res.send(`El usuario ${id} ha sido eliminado satisfactoriamente`)
  } catch (err) {
    console.log(err)
  }
}

const getUsers = async (req, res) => {
  try {
    const response = await pool.query('SELECT * FROM users');
    res.json(response.rows)
    console.log(response.rows)
  } catch (err) {
    console.log(err)
  }

}

module.exports = {
  getUserByUsername,
  updateUserById,
  createUser,
  deleteUserById,
  getUsers
}