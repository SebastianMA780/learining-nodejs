//os module allows us to access the operating system information.
const os = require('node:os');

console.log(os.arch()); //architecture of the operating system
console.log(os.platform()); //platform of the operating system
console.log(os.cpus()); //cpu information
console.log(os.freemem()); //free memory
console.log(os.homedir());  //home directory