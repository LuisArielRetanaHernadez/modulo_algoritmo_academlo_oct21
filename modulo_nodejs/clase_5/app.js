const express = require("express");

const app = express()

const todosRouter =  require('./routes/todos')

app.use('/api/v1/todos', todosRouter)

const toDo = [
    {
        id: 1,
        content: "ir a correr",
    },
    {
        id: 2,
        content: "ver a auronplay",
    },
    {
        id: 4,
        content: "ir a jugar futbol",
    },
]

app.get('/', (req, res, next) => {
    res.status(200).json({status: 'success', data: {todos: toDo}})
})



const PORT = 3001

app.listen(PORT, () => {
    console.log('Server run is Port ', PORT)
})