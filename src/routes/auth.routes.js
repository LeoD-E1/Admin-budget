// login y register
import { Router } from 'express';
import jwt from 'jsonwebtoken';

const router = Router();

router.get('/', (req, res) => {
    res.json({ "greeting": "Hello" })
})

module.exports = router;