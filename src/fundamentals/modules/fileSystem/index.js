/*  
	- It Allows us access to the files of our system.
		- There is synchronous functions for all node methods but this can block the thread
			so it is recommended to use asynchronous functions.
*/
const fs = require('fs');

function readFile(route, callback) {
	fs.readFile(route, (error, data) => {
		console.log(data);
	})
}

readFile(__dirname + '/file.txt');