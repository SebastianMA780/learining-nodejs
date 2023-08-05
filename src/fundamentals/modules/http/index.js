const http = require('node:http');

const server = http.createServer((req, res) => {

	console.log('Request received');
	console.log(req.url);

	res.write('Hello World!');

	res.end()
})

//0 means random port, first available port.
server.listen(0, () => {
	console.log(`Server started, listening on port ${server.address().port}`);
});
