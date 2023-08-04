import http from 'http'

const hostname = '127.0.0.1'
const port = '8080'

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/plain' })
    res.end('Hello \n')
})

server.listen(port, hostname, () => {
    console.log(`Server running at ${hostname}:${port}`);
})