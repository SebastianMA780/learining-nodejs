const path = require('node:path');

//type of separator in your operative system
console.log(path.sep);

//join routes
const filePath = path.join('content', 'subfolder', 'test.txt');
console.log(filePath);
// this is useful because it will work in any operative system
// content/subfolder/test.txt will not work in windows for example

const extension = path.extname('my.super_image.png');
console.log(extension);
