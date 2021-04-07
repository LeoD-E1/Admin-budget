import pool from '../database/database';
import bcrypt, { hash } from 'bcrypt';
import jwt from 'jsonwebtoken';

const getUserByUsername = async (req, res) => {
  try {
    const user = req.params.user
    const response = await pool.query('SELECT * FROM users WHERE userName = $1', [user]);
    res.json(response.rows);
  } catch (err) {
    console.log(err)
  }
}

const updateUsername = async (req, res) => {
  try {
    const id = req.params.id
    const { username } = req.body;
    const response = await pool.query('UPDATE users SET username = $1 WHERE userId = $2', [username, id])
    console.log(id, username)
    res.send(`user ${username} updated successfully`)
  } catch (err) {
    console.log(err)
  }
}

const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body
    const response = await pool.query('INSERT INTO users (username, email, passwordHash) VALUES($1, $2, $3)', [username, email, password])
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

const updatePassword = async (req, res) => {
  const id = req.params.id
  const { password } = req.body
  await bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
      const response = pool.query('UPDATE users SET password = $1 WHERE userId = $2', [hash, id])
      res.send('Password has been updated successfully')
    })
  })
}

module.exports = {
  getUserByUsername,
  updateUsername,
  updatePassword,
  createUser,
  deleteUserById,
  getUsers
}