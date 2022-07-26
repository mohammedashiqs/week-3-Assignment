var read = require('readline-sync')

var userHeight = read.question("Enter height")

try{
    if(isNaN(userHeight)) throw "notANumberError";
    var userHeight = Number(userHeight)
    if(userHeight>200) throw "HugeHeightError";
    if(userHeight<40) throw "TinyHeightError"
    if(userHeight>40 && userHeight<200) console.log("valid")
}catch(err){
    console.log(err)
}