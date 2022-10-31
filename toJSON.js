//toJSON
//Richard Summerlin

//read a .txt(min 3 lines of text) and parse into a JSON object
//split(' ') and parse into arrays?
var fs = require('fs');
var buffer = fs.readFileSync(process.argv[2]);
var output = buffer.toString();
console.log(output);