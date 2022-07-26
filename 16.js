var read = require('readline-sync')

var num = read.question("Enter a number");

var i,flag=0;

for(i=1;i<=num;i++){
    if(num%i==0){
        flag++;
    }
}

if(flag==2){
    console.log("Entered number is a prime number")
}else{
    console.log("Entered number is not a prime number")
}