import pool from '../database/database';
import bcrypt, { hash } from 'bcrypt';

const getUserByUsername = async (req, res) => {
  try {
    const user = req.params.user
    const response = await pool.query('SELECT * FROM users WHERE username = $1', [user]);
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
    const isUser = await pool.query('SELECT * FROM users WHERE username = $1', [username])

    if (isUser.rows[0]) {
      res.send(`'${username}' has already been used`)
    } else {
      verifyEmail(email, res)
      const pash = await encodePassword(password)
      const response = await pool.query('INSERT INTO users (username, email, password) VALUES ($1, $2, $3)', [username, email, pash])
      res.json(`User ${username} has been registered successfully`);
    }

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
  try {
    const id = req.params.id
    const { password } = req.body
    const pash = await encodePassword(password)
    const response = pool.query('UPDATE users SET password = $1 WHERE userId = $2', [pash, id])
    res.send('Password has been updated successfully')

  } catch (err) {
    console.log(err)
  }
}

const encodePassword = async (password) => {
  const salt = await bcrypt.genSalt(10)
  const pash = await bcrypt.hash(password, salt)
  return pash;
}

const verifyEmail = async (email, res) => {
  const isEmail = await pool.query('SELECT * FROM users WHERE email = $1', [email])
  if (isEmail.rows[0]) {
    res.send('Email has already been used')
  } else {
    console.log('email ok')
  }
}

module.exports = {
  getUserByUsername,
  updateUsername,
  updatePassword,
  createUser,
  deleteUserById,
  getUsers
}