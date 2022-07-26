var read = require('readline-sync')


var limit = read.question("Enter row limit")

var i,count=1;

for(i=1;i<=limit;i++){
    for(j=1;j<=i;j++){
        process.stdout.write(count++ +" ");
    }
    console.log(" ")
}