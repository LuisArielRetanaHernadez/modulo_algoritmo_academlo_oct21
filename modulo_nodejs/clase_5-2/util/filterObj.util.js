const filterObj = (obj, ...allowedFields) => {
	// allowedFields = ['title', 'content', 'author']
	// obj = { title: 'New title', content: 'New content', email, comment }

	const newObj = {};

	// Get the obj properties [title, content, email, comment]
	Object.keys(obj).forEach(el => {
		if (allowedFields.includes(el)) {
			newObj[el] = obj[el];
		}
	});

	return newObj;
};

module.exports = { filterObj }