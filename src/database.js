const { Pool } = require('pg')

const config = {
    user: 'postgres',
    host: 'localhost',
    password: '',
    database: 'budget'
}

const pool = new Pool(config)