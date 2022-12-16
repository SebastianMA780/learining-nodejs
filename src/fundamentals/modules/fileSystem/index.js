/*  
	- It Allows us access to the files of our system.
		- There is synchronous functions for all node methods but this can block the thread
			so it is recommended to use asynchronous functions.
*/
const fs = require('fs');

// Read a file from the system
function readFile(route, callback) {
	fs.readFile(route, (error, data) => {
		callback(data.toString());
	})
}

readFile(__dirname + '/file.txt', console.log);

//write a file
function writeFile({ route, content, callback }) {
	fs.writeFile(route, content, (error) => {
		if (error) {
			console.error('An error has ocurred', error);
			} else {
				callback('The file has been saved');
			}
		});
}

writeFile({
	route: __dirname + '/file1.txt',
	content: 'New file created',
	callback: console.log,
});
	
//delete a file
function deleteFile(route, callback) {
	fs.unlink(route, callback);
}

deleteFile(__dirname + '/file1.txt', console.log);
