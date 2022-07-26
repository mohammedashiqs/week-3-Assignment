var read = require('readline-sync')


var array = []
var newarray=[]
var arrayLimit = read.question("Enter the array limit")


console.log("Enter the values of an array")

for(i=0;i<arrayLimit;i++){
    array[i]=read.question("")
}

for(i=0;i<arrayLimit-1;i++){
    newarray[i]=array[i]*array[i+1];
}

console.log("Output: ")

for(i=0;i<arrayLimit-1;i++){
    process.stdout.write(newarray[i]+" ")
}

