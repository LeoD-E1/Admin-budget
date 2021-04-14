import pool from '../database/database';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';


const login = async (req, res) => {
  const user = req.body
  const { username, password } = req.body;
  checkUser(username, password, res)
}

const register = () => {

}

const checkUser = async (username, password, res) => {
  const isUser = await pool.query('SELECT * FROM users WHERE username = $1', [username])
  console.log(isUser.fields[0].columnID)
  if (isUser.rows.length >= 1) {
    const matchPassword = await bcrypt.compare(password, isUser.rows[0].password);

    if (matchPassword) {
      const token = jwt.sign(username, 'secret_key', {
        expiresIn: '2h',
        user: username
      })
      res.send(token)
    } else {
      res.send('Contraseña incorrecta')
    }
  } else {
    res.send('Not user')
  }
}

module.exports = {
  login,
  register
}