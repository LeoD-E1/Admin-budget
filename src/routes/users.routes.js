import { Router } from 'express';
const router = Router();

import {getUserByUsername, updateUserById, createUser, deleteUserById, getUsers} from '../controllers/user.controllers';
import { route } from './records.routes';

router.get('/', getUsers)
router.get('/:user', getUserByUsername)
router.put('/:id', updateUserById)
router.delete('/:id', deleteUserById)
router.post('/', createUser)


module.exports = router;