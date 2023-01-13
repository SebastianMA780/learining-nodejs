//a child process is a separate process that is spawned by a parent process (typically the Node.js process);

const { exec } = require('child_process');

exec('ls -la', (error, stdout, stderr) => {
	if (error) {
		console.error(`exec error: ${error}`);
		return;
		}
		console.log(`stdout: ${stdout}`)
	}
);


/* 

	It's important to note that the child process runs separately from the parent process 
	and it has its own memory space and CPU time, so it's important to handle and manage it properly
	to prevent it from causing issues with the parent process such as memory leaks or high CPU usage.

*/