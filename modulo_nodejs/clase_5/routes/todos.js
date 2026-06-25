const express = require('express')

const router = express.Router()

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
        id: 3,
        content: "ir a jugar futbol",
    },
]

router.get('/', (req, res, next) => {
    res.status(200).json({status: 'success', data: {todos: toDo}})

})

module.exports = router
