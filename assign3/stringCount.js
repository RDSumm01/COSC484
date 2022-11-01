//stringCount
//read total number of occurrences of given strings in a file

const fs = require('fs');
var buffer = fs.readFileSync(process.argv[2]);
var output = buffer.toString();
var inputArr = output.split('\r\n');

console.log(inputArr);
