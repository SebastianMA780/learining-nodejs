const http = require('node:http')

const processRequest = (req, res) => {
  const { url, method } = req

  switch (method) {
    case 'GET':
      switch (url) {
        case '/':
          res.setHeader('Content-Type', 'text/html', 'charset=utf-8')
          return res.end('<h1>Hello World</h1>')
        default:
          res.statusCode = 404
          res.setHeader('Content-Type', 'text/html', 'charset=utf-8')
          return res.end('<h1>Not Found</h1>')
      }

    case 'POST':
      switch (url) {
        case '/data': {
          let body = ''
          // nodejs is based on events, so we need to listen to the data event
          // to get the body of the request. the data will arrive in chunks
          // you can think of it as a stream of data.
          req.on('data', (chunk) => {
            body += chunk.toString()
          })

          req.on('end', () => {
            res.setHeader('Content-Type', 'application/json', 'charset=utf-8')
            const finalData = JSON.parse(body)
            finalData.timestamp = Date.now()
            res.end(JSON.stringify(finalData))
          })
        }
      }
  }
}

const server = http.createServer(processRequest)

server.listen(1234, () => {
  console.log(`Server started, listening on port http://localhost:${server.address().port}`)
})
