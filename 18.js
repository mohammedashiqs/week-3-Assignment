var read =require("readline-sync")

console.log("Enter the marks: ")
var writtenTest = read.question("Written test: ")
var labExams = read.question("Lab Exams: ")
var assingmets = read.question("Assignments:")


if(writtenTest<=100&&writtenTest>=0 && labExams<=100&&labExams>=0 && assingmets<=100&&assingmets>=0){
    var overAllGrade=((writtenTest*70)/100)+((labExams*20)/100)+((assingmets*10)/100)

    console.log("Grade of the student is: "+overAllGrade)




}else{
    console.log("Inavalid Entry! Please enter valid marks")
}