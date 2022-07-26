var read = require('readline-sync')
var n =  read.question("Enter the size of an array");

var i, arr = [],count=0;

console.log("Enter the values of array");

for(i=0;i<n;i++){
    arr[i]=read.question("")
}

for(i=0;i<n;i++){
    if(arr[i]%2==0){
        count++;
    }
}

console.log("Number of even numbers in the given array is: "+count)
