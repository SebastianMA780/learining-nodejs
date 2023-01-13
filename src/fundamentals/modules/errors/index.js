function breakNode() {
	throw new Error('I broke Node!');
}

breakNode();

// Node will stop the entire process and print the error message

try {
	breakNode()
} catch (error) {
	console.error(error);
}

//with try catch we can handle the error and continue the execution of the program.

/* 
	errors will be bubbled up to the top of the call stack and if there is no try catch
	the program will stop but if we handle the error we can continue the execution of the program.
*/

function breakNodeWithAsyncProcess() {
	setTimeout(() => {
			throw new Error('I broke Node with async process');
	}, 2000);
}

try {
	breakNodeWithAsyncProcess();
} catch (error) {
	console.error(error);
}

/* 

	even we are handle error for breakNodeWithAsyncProcess function
	the program will stop because the error is not handle in the async process
	which is setTimeout callback function. this one will be executed out of the thread
	that has the try catch block.

*/