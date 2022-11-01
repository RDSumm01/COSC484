//toJSON
//Richard Summerlin
//read a .txt(min 3 lines of text) and parse into a JSON object
//split(' ') and parse into arrays? XXXXXX WRONG

var fs = require('fs');
var buffer = fs.readFileSync(process.argv[2]);
var output = buffer.toString();
var inputArr = output.split('\r\n');
var jsonobj = {};

function JSONinit(){
    jsonobj = { // parse first three args into JSON object
        'fName' : inputArr[0],
        'lName' : inputArr[1],
        'location' : inputArr[2],
        'extraLine1' : "N/A",
    }
    for(var i = 3; i <= inputArr.length-1; i++){ //parse extra lines
        var newEl = 'extraLine' +(i - 2);
        var newVal = inputArr[i]
        jsonobj[newEl] = newVal;
    }    
};

if(process.argv.length > 3){ //Error restrictions
    console.log("Error has occurred: Too many arguments passed in command line")
}
else if(inputArr.length < 3){
    console.log("Error has occurred: File too small to parse and initialize")
}
else{
    JSONinit();
    console.log(jsonobj);
}