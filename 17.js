



var read = require('readline-sync')


//class
class mathopr{
    
    addition(num1,num2){
       var res = +num1+ +num2;
        return res
    }

    subtraction(num1,num2){
        var res = num1-num2;
         return res
     }

     multiplication(num1,num2){
        var res = num1*num2;
         return res
     }

     division(num1,num2){
        var res = num1/num2;
         return res
     }
}

function main(){
//objectes
var num1 = read.question("Enter number 1: ")
var num2 = read.question("Enter number 2: ")

console.log("Select operation.\n(eg click 1 for addition)\n\n1.Addition\n2.Subtraction\n3.multiplication\n4.Division\n")
var choice = read.question(" ")
console.log("You have selected option "+choice)
var obj1 = new mathopr();
var res;


switch(choice){
    case "1":
        var res = obj1.addition(num1,num2);
        break;

        case "2":
        var res = obj1.subtraction(num1,num2);
        break;

        case "3":
        var res = obj1.multiplication(num1,num2);
        break;

        case "4":
        var res = obj1.division(num1,num2);
        break;

        default:
            console.log("Invalid Entry")
}

console.log("Ans: "+res)


}

main();