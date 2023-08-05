const http = require('node:http');

const server = http.createServer((req, res) => {

	console.log('Request received');
	console.log(req.url);

	res.write('Hello World!');

	res.end()
})

server.listen(3000, () => {
	console.log('Server started, listening on port 3000');
});
