import pool from '../database/database';
import jwt from 'jsonwebtoken';
import { token } from 'morgan';

const login = async (req, res) => {
    const user = req.body;
    const { username, password } = req.body;
    const userLoged = await pool.query('SELECT * FROM users WHERE username = $1', [username])

    if (typeof (userLoged) != 'undefined') {
        const token = jwt.sign({ user }, 'secret_key')
        res.send(userLoged.rows)
    } else {
        res.send('No user')
    }
}



const register = () => {

}

module.exports = {
    login,
    register
}