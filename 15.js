
function main(){

var read = require('readline-sync')
var array = []
var size;


function getArray(){
    size = read.question("Enter the size of an array")
    console.log("Enter the values of array")
    for(i=0;i<size;i++){
        array[i]=read.question(" ");
    }

}

function displayArray(){
    for(i=0;i<size;i++){
        process.stdout.write(array[i]+" ");
    }
}

getArray();
displayArray();

}


main();






