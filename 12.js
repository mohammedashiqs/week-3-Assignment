var r = require('readline-sync')
console.log("Enter the size of an array")
var n = r.question("")
var i,j,arr = [];

console.log("Enter the values of array")
for(i=0;i<n;i++){
    arr[i]=r.question("")
}
for(i=0;i<n-1;i++){
    for(j=i+1;j<n;j++){
        if(arr[i]<arr[j]){
            temp=arr[i]
            arr[i]=arr[j];
            arr[j]=temp
        }
    }
}


console.log("Sorted array: ")
for(i=0;i<n;i++){
    process.stdout.write(arr[i]+" ");
}
