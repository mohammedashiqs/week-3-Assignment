var read = require('readline-sync')

function main(){

    var array1 = []
    var array2 = []
    var sumArray = []
    var childArray = [] //temprary array
    var arraySize;

    function getArray(){
        arraySize = read.question("Enter the size of arrays")
        console.log("Enter the values of array 1")
        for(i=0;i<arraySize;i++){
            childArray=[]
            for(j=0;j<arraySize;j++){
                childArray[j]=read.question(" ")
            }
            array1[i]=childArray
        }

        console.log("Enter the values of array 2")
        for(i=0;i<arraySize;i++){
            childArray=[]
            for(j=0;j<arraySize;j++){
                childArray[j]=read.question(" ")
            }
            array2[i]=childArray
        }

    }

    function addArray(){
        for(i=0;i<arraySize;i++){
            childArray=[]
            for(j=0;j<arraySize;j++){
                childArray[j] = +array1[i][j] + +array2[i][j]
            }
            sumArray[i]=childArray
        }

    
    }

    function displayArray(){

        console.log("Sum of array 1 and array 2: ")
        for(i=0;i<arraySize;i++){
            for(j=0;j<arraySize;j++){
                process.stdout.write(sumArray[i][j]+" ");
            }
            console.log("");
        }

    }

    



getArray();
addArray();
displayArray();

}

main();
