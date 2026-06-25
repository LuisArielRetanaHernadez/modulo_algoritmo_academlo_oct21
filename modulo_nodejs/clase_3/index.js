const express = require('express')
const path = require('path')

const app = express()

const PORT = 3001

// app.use(express.json())
// app.use(express.urlencoded({extended: false}))

app.listen(PORT, () => {
    console.log('esxpress app running on port')
})

app.get('/', (req, res) => {
    const indexPath = path.join(__dirname, 'views', 'login.html')
    return res.status(200).sendFile(indexPath)
})

app.post('/login', (req, res) => {
    const body = [];
    
    req.on('data', chunk => {
        body.push(chunk)
    })

    req.on('end', () => {
        // const user = req.body
        // console.log('usuario ', user)
        const parsedBody = Buffer.concat(body).toString()

        const [email, password] = parsedBody.split('&')

        const parsedEmail = email.split('=')[1].replace('%40', '@')

        const parsedPassword = password.split('=')[1]

        console.log(`correo: ${parsedEmail} contraseña: ${parsedPassword}`)

        if(parsedEmail === "john@test.com" && parsedPassword === 'pass1234'){
            return res.status(200).send('<h1>acceso exitoso</h1>')
        }else{
            return res.status(500).send('<h1>acceso denegado</h1>')
        }
    })
    // return res.send()
})
