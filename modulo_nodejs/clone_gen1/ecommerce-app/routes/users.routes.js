const express = require('express');

// Controllers
const {
	createUser,
	getUserById,
	updateUser,
	disableUserAccount,
	loginUser,
} = require('../controllers/users.controller');

// Middlewares
const {
	protectSession,
	protectUser,
} = require('../middlewares/auth.middleware');
const {
	createUserValidations,
	updateUserValidations,
	loginUserValidations,
	validateResult,
} = require('../middlewares/validators.middleware');

const router = express.Router();

// Post - Create new user
// Patch - Update user profile (email, name)
// Delete - Disable user account

router.post('/login', loginUserValidations, validateResult, loginUser);

router
	.route('/')
	.post(createUserValidations, validateResult, createUser)
	.patch(
		protectSession,
		// protectUser,
		updateUserValidations,
		validateResult,
		updateUser
	)
	.delete(
		protectSession,
		// protectUser,
		disableUserAccount
	);

// Get - Get user by id
router.get('/:id', getUserById);

module.exports = { userRouter: router };
