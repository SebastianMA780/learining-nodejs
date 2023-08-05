const http = require('node:http')

const processRequest = (req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ message: 'Hello world!' }))
  }
}

const server = http.createServer(processRequest)

// 0 means random port, first available port.
server.listen(0, () => {
  console.log(`Server started, listening on port http://localhost:${server.address().port}`)
})
