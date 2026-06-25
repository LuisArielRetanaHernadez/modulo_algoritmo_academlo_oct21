const users = [
	{ id: 1, name: 'Max', age: 23 },
	{ id: 2, name: 'John', age: 22 },
	{ id: 3, name: 'Jill', age: 21 },
];

exports.getUsers = (req, res) => {
    res.status(202).json({ users })
};

exports.getUserById = (req, res) => {

    const { id } = req.params;

    const user = users.find( user => user.id = +id)

    if(!user) return res.status(404).json({ message: "error, id invalido" })

    res.status.json({
        message: "peticion exitosa",
        data: user
    })
};

exports.createUser = (req, res) => {
    const { name, age } = req.body; // { ... }

	const newUser = {
		id: Math.floor(Math.random() * 100),
		name,
		age,
	};

	users.push(newUser);

	res.status(201).json({
		status: 'success',
		data: { newUser },
	});
};

exports.putUser = (req, res) => {
    const { id } = req.params;
	const { name, age } = req.body;

	// Validate the data has some value
	if (
		!title ||
		!content ||
		name.length === 0 ||
		age.length === 0 
	) {
		res.status(400).json({
			status: 'error',
			message: 'Must provide a title, content and the author for this reuqest',
		});
		return;
	}

	// Find post by id, and get the index
	const userIndex = users.findIndex(user => user.id === +id);

	if (userIndex === -1) {
		res.status(404).json({
			status: 'error',
			message: 'Cant update user, invalid ID',
		});
		return;
	}

	// Update post and save it in the list
	const updateUser = userIndex[userIndex];

	updateUser.name = name;
	updateUser.age = age;

	users[postIndex] = updateUser;

	// 204 - No content
	res.status(204).json({ status: 'success' });
};

exports.patchUser = (req, res) => {
    const { id } = req.params;

	const data = filterObj(req.body, 'name', 'age');

	const userIndex = users.findIndex(user => user.id === +id);

	if (userIndex === -1) {
		res.status(404).json({
			status: 'error',
			message: 'Cant update user, invalid ID',
		});
		return;
	}

	let updatedUser = users[userIndex];

	updatedUser = { ...updatedUser, ...data };

	users[userIndex] = updatedUser;

	res.status(204).json({ status: 'success' });
};

exports.deleteUser = (req, res) => {
    const { id } = req.params;

	// Find post index, by the given id
	const userIndex = users.findIndex(user => user.id === +id);

	if (userIndex === -1) {
		res.status(404).json({
			status: 'error',
			message: 'Cant delete user, invalid ID',
		});
		return;
	}

	// Use splice to delete post
	userIndex.splice(userIndex, 1);

	res.status(204).json({ status: 'success' });
}