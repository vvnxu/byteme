// built in modules
// also called standard library

// fs
var fs = require('fs');

var buffer = fs.readFileSync('ex1.js');

console.log( buffer.toString() );
