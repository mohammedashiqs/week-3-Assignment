var read = require('readline-sync')

var size = read.question("Enter the size of arrays:")

var array1 = []
var array2 = []
var array3 = []

var element = []

console.log("Enter the values of array 1");

for(i=0;i<size;i++){
       element = []
    for(j=0;j<size;j++){
        element[j]=read.question(" ")
    }
    array1[i]=element;

}

console.log("Enter the values of array 2");
for(i=0;i<size;i++){
    element = []
 for(j=0;j<size;j++){
     element[j]=read.question(" ")
 }
 array2[i]=element;

}



/* for concept:-
element[0]= +array1[0][1]+ +array2[0][0]
array3[0]=element
console.log(array3[0][0])
*/

console.log("Sum of 2 arrays is:")

for(i=0;i<size;i++){
    element = []
    for(j=0;j<size;j++){
        element[j] = +array1[i][j] + +array2[i][j];
    }
    array3[i]=element
    
}




for(i=0;i<size;i++){
    for(j=0;j<size;j++){
        process.stdout.write(array3[i][j]+" ");
    }
    console.log("")
}



