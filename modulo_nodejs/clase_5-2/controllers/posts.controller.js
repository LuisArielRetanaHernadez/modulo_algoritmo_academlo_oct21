const { filterObj } = require('../util/filterObj.util')

const posts = [
	{ id: 1, title: 'Post 1', content: 'Some content', author: 'Max' },
	{ id: 2, title: 'Post 2', content: 'Some content 2', author: 'John' },
	{ id: 3, title: 'Post 3', content: 'Some content 3', author: 'Jill' },
];

exports.getPosts = (req, res) => {
    res.status(200).json({
		status: 'success',
		data: {
			posts,
		},
	})
};

exports.createPost = (req, res) => {
	const { title, content } = req.body; // { ... }

	const newPost = {
		id: Math.floor(Math.random() * 100),
		title,
		content,
	};

	posts.push(newPost);

	res.status(201).json({
		status: 'success',
		data: { newPost },
	});
};

exports.getPostsById = (req, res) => {
    const { id } = req.params;

	const post = posts.find(post => post.id === +id);

	if (!post) {
		res.status(404).json({
			status: 'error',
			message: 'No post found with the given ID',
		});
		return;
	}

	res.status(200).json({
		status: 'success',
		data: {
			post,
		},
	});
};

exports.putPosts = (req, res) => {
	const { id } = req.params;
	const { title, content, author } = req.body;

	// Validate the data has some value
	if (
		!title ||
		!content ||
		!author ||
		title.length === 0 ||
		content.length === 0 ||
		author.length === 0
	) {
		res.status(400).json({
			status: 'error',
			message: 'Must provide a title, content and the author for this reuqest',
		});
		return;
	}

	// Find post by id, and get the index
	const postIndex = posts.findIndex(post => post.id === +id);

	if (postIndex === -1) {
		res.status(404).json({
			status: 'error',
			message: 'Cant update post, invalid ID',
		});
		return;
	}

	// Update post and save it in the list
	const updatePost = posts[postIndex];

	updatePost.title = title;
	updatePost.content = content;
	updatePost.author = author;

	posts[postIndex] = updatePost;

	// 204 - No content
	res.status(204).json({ status: 'success' });
};

exports.patchPosts = (req, res) => {
	const { id } = req.params;

	const data = filterObj(req.body, 'title', 'content', 'author');

	const postIndex = posts.findIndex(post => post.id === +id);

	if (postIndex === -1) {
		res.status(404).json({
			status: 'error',
			message: 'Cant update post, invalid ID',
		});
		return;
	}

	let updatedPost = posts[postIndex];

	updatedPost = { ...updatedPost, ...data };

	posts[postIndex] = updatedPost;

	res.status(204).json({ status: 'success' });
};

exports.deletePosts = (req, res) => {
	const { id } = req.params;

	// Find post index, by the given id
	const postIndex = posts.findIndex(post => post.id === +id);

	if (postIndex === -1) {
		res.status(404).json({
			status: 'error',
			message: 'Cant delete post, invalid ID',
		});
		return;
	}

	// Use splice to delete post
	posts.splice(postIndex, 1);

	res.status(204).json({ status: 'success' });
};