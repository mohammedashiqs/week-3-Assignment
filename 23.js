var read = require('readline-sync')



//global declaration
    var array = []
    var childArray = []
    var i,j



//class
class sample{
    
    constructor(arraySize){
        this.arraySize=arraySize
    }

    getArray(){
        console.log("Enter the values of an array")
        for(i=0;i<this.arraySize;i++){
            childArray=[]
            for(j=0;j<this.arraySize;j++){
                childArray[j]=read.question(" ");
            }
            array[i] = childArray
        }
    
        
    }

    displayArray(){
        console.log("Array elements are: ")
        for(i=0;i<this.arraySize;i++){
            for(j=0;j<this.arraySize;j++){
                process.stdout.write(array[i][j]+" ")
            }
            console.log("")
        }

    }

  

}


//main function
function main(){
    


var arraySize = read.question('Enter the size of an arrays\n')

;

var obj1 = new sample(arraySize);

obj1.getArray();
obj1.displayArray();



}


main();