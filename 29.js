function  myFilter(array,callback){
    callback(array)
 }
 
 var myArray=[]
 
     myArray = [1,2,3,4,5]
 
 
 myFilter(myArray,function callBack(arr){
     var sum=0
     for(let i=0;i<arr.length; i++)
     {
         sum+=arr[i]
     }
     console.log('sum : '+sum)
     if(sum%2==0)
     {
         return true
     }else{
         return false
     }
 
 })