const express = require('express');

const {
    getPosts,
    getPostsById,
    patchPosts,
    deletePosts,
    putPosts,
    createPost
} = require('../controllers/posts.controller')

const router = express.Router();

// Endpoints

// GET http://localhost:4000/posts
app.get('/', getPosts);

// GET http://localhost:4000/posts/:id
app.get('/:id', getPostsById);

// POST http://localhost:4000/posts
app.post('/', createPost);

// PUT http://localhost:4000/posts/:id
app.put('/:id', putPosts);

// PATCH http://localhost:4000/posts/:id
app.patch('/:id', patchPosts);

// DELETE http://localhost:4000/posts/:id
app.delete('/:id', deletePosts);

module.exports = {postsRouter: router};