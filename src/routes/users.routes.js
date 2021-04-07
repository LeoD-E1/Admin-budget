import { Router } from 'express';
const router = Router();

import {
  getUserByUsername,
  updateUsername,
  createUser,
  deleteUserById,
  getUsers,
  updatePassword
} from '../controllers/user.controllers';

router.get('/:user', getUserByUsername)
router.get('/', getUsers)
router.put('/settings/:id', updatePassword)
router.put('/profile/:id', updateUsername)
router.delete('/settings/:id', deleteUserById)
router.post('/', createUser)

module.exports = router;