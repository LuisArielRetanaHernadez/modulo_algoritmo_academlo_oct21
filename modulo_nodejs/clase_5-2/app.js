const express = require('express');

// routers

const { postsRouter } = require('./routes/posts.route');
const { userRoutes } = require('./routes/users.routes')

// Init express app
const app = express();

// Enable JSON incoming data
app.use(express.json());

app.use('/api/v1/posts', postsRouter);
app.use('/api/v1/users', userRoutes)

app.listen(4000, () => {
	console.log('Express app running');
});
