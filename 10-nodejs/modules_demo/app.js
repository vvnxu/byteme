var whatsForDinner = require('./lib') // require('./lib') returns a function
console.log(whatsForDinner());

var someLib = require('./colorLib') // require('./colorLib') returns a object
console.log(someLib.favColor()); // mistyrose
