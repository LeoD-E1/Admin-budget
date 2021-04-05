import { Router } from 'express';
const router = Router();

import {
    getUserByUsername,
    updateUserById,
    createUser,
    deleteUserById,
    getUsers,
    updatePassword
} from '../controllers/user.controllers';

router.get('/', getUsers)
router.put('/config/:id', updatePassword)
router.get('/:user', getUserByUsername)
router.put('/:id', updateUserById)
router.delete('/:id', deleteUserById)
router.post('/', createUser)

module.exports = router;