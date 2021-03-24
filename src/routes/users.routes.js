const { Router } = require('express')
const router = Router();
const path = require('path')
const { getUsers } = require('../database/database')

router.get('/', getUsers)

module.exports = router;