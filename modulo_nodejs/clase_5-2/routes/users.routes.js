const express = require('express');

const {
    getUsers,
    getUserById,
    patchUser,
    putUser,
    createUser,
    deleteUser
} = require('../controllers/users.controller')

const router = express.Router()

router.get('/', getUsers);

router.get('/:id', getUserById);

router.patch('/:id', patchUser);

router.put('/:id', putUser);

router.post('/', createUser);

router.delete('/:id', deleteUser)

module.exports = { userRoutes: router }