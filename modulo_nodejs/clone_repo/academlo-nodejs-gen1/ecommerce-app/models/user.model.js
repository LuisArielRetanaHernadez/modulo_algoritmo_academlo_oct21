const { DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');

const { AppError } = require('../utils/appError');
const { db } = require('../utils/database');

const User = db.define(
	'users',
	{
		id: {
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
			type: DataTypes.INTEGER,
		},
		name: {
			type: DataTypes.STRING(100),
			allowNull: false,
			// validate: {
			// 	customValidation(val) {
			// 		if (val.length < 5) {
			// 			console.log('Not a valid name!!');
			// 			throw new AppError('Name must be at least 2 characters long', 400);
			// 		}
			// 	},
			// },
		},
		email: {
			type: DataTypes.STRING(100),
			allowNull: false,
			unique: true,
		},
		password: {
			type: DataTypes.STRING(255),
			allowNull: false,
		},
		role: {
			type: DataTypes.STRING(20),
			allowNull: false,
			defaultValue: 'standard',
		},
		status: {
			type: DataTypes.STRING(20),
			allowNull: false,
			// available | deleted | banned
			defaultValue: 'available',
			validate: {
				checkStatus(val) {
					const status = ['available', 'deleted', 'banned'];

					if (!status.includes(val))
						throw new AppError('Not a valid status!', 500);
				},
			},
		},
	},
	{ timestamps: false }
);

User.addHook('beforeCreate', async (user, options) => {
	const salt = await bcrypt.genSalt(12);
	const hashedPassword = await bcrypt.hash(user.password, salt);

	user.password = hashedPassword;
});

module.exports = { User };
