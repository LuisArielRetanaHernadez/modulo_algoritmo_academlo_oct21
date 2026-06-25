const express = require('express');
const path = require('path')

// init app
const app = express()

app.use(express.static(path.join(__dirname, 'views')))
app.use(express.urlencoded())
app.use(express.json())

app.get('/', (req, res) => {
    const indexPath = path.join(__dirname, 'views', 'index.html')
    res.status(200).sendFile(indexPath)
})

app.get('/login', (req, res) => {
    const loginPath = path.join(__dirname, 'views', 'login.html')
    res.status(200).sendFile(loginPath)
})

app.post('/login', (req, res) => {
    const {emial, password} = req.body

    if(emial === "luis@gmail.com" && password === "12345") {
        return res.status(200).json({emial, password})
    }
    res.status(505).json({mesaage: "not'do acceso"})
})

const PORT = 3001

app.listen(PORT, () => {
    console.log('express is run in the port ', PORT)
})