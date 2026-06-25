const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {"content-type":"text/plain"})
    res.end("hola mundo")
})

server.listen(3001)