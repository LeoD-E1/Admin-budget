const { Router } = require('express')
const router = Router();

const pool = require('../database/database')

router.get('/', async (req, res) => {
    const query = 'select * from users';
    const response = await pool.query(query);
    res.json(response.rows);
})

router.post('/', async(req, res) => {
    console.log(req.body)
    const {userName, email, passwordHash} = req.body
    const response = await pool.query('INSERT INTO users (userName, email, passwordHash) VALUES($1, $2, $3)', [userName, email, passwordHash])
    console.log(response.rows)
    res.send(`El usuario ${req.body.userName} ha sido guardado correctamente`)
})

module.exports = router;