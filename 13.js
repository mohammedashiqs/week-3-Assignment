var read = require('readline-sync')

var s ="";

s=read.question("Enter a string")

var flag=0;

var n= s.length
for(i=0;i<n/2;i++){
    if(s[i]!=s[n-1-i]){
        flag=1;
        break;
    }
}

if(flag==0){
    console.log("Entered string is a palindrome")
}else{
    console.log("Entered string is not a palindrome")
}
