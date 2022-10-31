//toArray
//Richard Summerlin

//reads multiple numbers from command line, push() into array
function parseArgs(){
    var arr = [null];
    var i = 0;
    arr.pop();
    process.argv.forEach(function(){//copy command line into an array
        if(process.argv[i] %2 === 0){//prevents push of element if element is not type int or even
            arr.push(process.argv[i]);
        }
        i++;
    })
    print(arr);
}


//print() need to be cleaned up but this code is fully functional
function print(printArr){//prints a given array
    var j = 0;
    printArr.forEach(function(){
        console.log(printArr[j]);
        j = j+1;
    })
}

parseArgs();