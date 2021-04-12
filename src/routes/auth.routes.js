// login y register
import { Router } from 'express';
import { login, register } from '../controllers/auth.controller.js'

const router = Router();

router.post('/signin', login)
router.post('/signup', register)

module.exports = router;
