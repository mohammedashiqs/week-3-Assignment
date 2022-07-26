var read = require('readline-sync')

var i,temp=0,array1 =[],array2 =[];


var n = read.question("Enter the size of Arrays")

console.log("Enter the values of array 1")

for(i=0;i<n;i++){
    array1[i]=read.question("")
}

console.log("Enter the values of array 2")

for(i=0;i<n;i++){
    array2[i]=read.question("")
}





for(i=0;i<n;i++){
    
        temp=array1[i];
        array1[i]=array2[i]
        array2[i]=temp
    
}


console.log("Arrays after swapping:")
console.log(" ")
process.stdout.write("Array 1: ")
for(i=0; i<n;i++){
    process.stdout.write(array1[i]+" ")
}

console.log("")

process.stdout.write("Array 2: ")

for(i=0;i<n;i++){
    process.stdout.write(array2[i]+" ")
}

