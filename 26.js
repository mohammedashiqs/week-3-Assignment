var read = require('readline-sync')

var  my_string = read.question("Enter input")
try{
  console.log(my_string.split("").reverse("").join(""))
   
    
}catch(err){

console.log(err.message)

}finally{
    console.log("Type of my_string is: "+typeof(my_string))
}