const express = require('express');

const users = [
	{ name: 'Max', age: 23 },
	{ name: 'John', age: 22 },
	{ name: 'Jill', age: 21 },
];

const posts = [
	{ id: 1, title: 'Post 1', content: 'Some content' },
	{ id: 2, title: 'Post 2', content: 'Some content 2' },
	{ id: 3, title: 'Post 3', content: 'Some content 3' },
];

// init express app
const app = express()

app.use(express.urlencoded())
app.use(express.json())

app.listen(4000, () => {
    console.log("sever run 4000")
})

app.get('/users', (req, res) => {
    res.status(202).json(users)
})

app.get('/posts', (req, res) => {
    res.status(202).json({
		data: {
			posts
		}
	}
	)
})

app.get('/post/:id', (req, res) => {
    const { id } = req.params
	const post = posts.find( post => post.id === +id)
	
	if(!post) {
		return	res.status(404).json({
			message: "err, post don't exite"
		})
	} 

	return res.status(202).json({
		data: {
			post
		}
	})
})

app.post('/posts', (req, res) => {
	const {title, content} = req.bdoy

	if(!title || !content) return res.status(404).json({ message: "err, not create post" })

	const newPost = {
		id: Math.floor( Math.random() * 100 + 1),
		title,
		content
	}

	posts.push(newPost)

	return res.status(202).json({
		data: {
			posts
		},
		message: "exito, creator new post"
	})
})